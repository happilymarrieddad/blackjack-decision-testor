let HandFactory = require('./Hand.js')
let CardFactory = require('./Card.js')
let DecisionMatrixFactory = require('./DecisionMatrix.js')

let WIN = 'Win'
let LOSS = 'Loss'
let PUSH = 'Push'
let WIN_WITH_BLACKJACK = 'Win With Blackjack'

let STAND = 'Stand'
let HIT = 'Hit'
let SPLIT = 'Split'
let DOUBLEDOW = 'Double Down'

class Player {
	constructor(options = {}) {
		this._number = options.number || 1
		this._hands = []
		this._initial_bet = options.bet || 5
		this._bet = this._initial_bet
		this._initial_money = options.initialMoney || 500
		this._funds = this._initial_money
		this._playsRounds = true
		this._matrixIndex = 0
		this._matrix = DecisionMatrixFactory.create()

		Object.assign(this,options)
	}

	static create(options = {}) {
		return new Player(options)
	}

	makeDecision(hand,dealerCards) {
		let self = this

		return new Promise((resolve,reject) => {
			let cards = hand.getCards()
			let dealerFaceupCard = dealerCards[0]

			let decision = this._matrix.decide(this._matrixIndex,hand,dealerFaceupCard)

			return resolve(decision)
		})
	}

	playSpecificHand(shoot,hand,index,dealerCards) {
		let self = this

		return new Promise((resolve,reject) => {
			async function run() {
				let cont = true
				
				while(cont) {
					//hand.display()
					let decision = await self.makeDecision(hand,dealerCards)
					//console.log(`Decision:`,decision)
					cont = self.shouldContinue(decision,shoot,index,hand)
					//console.log(`Are we going to continue?`,cont)
				}

				return {}	
			}

			run().then(resolve).catch(reject)
		})
	}

	playHands(shoot,dealerCards) {
		let self = this

		//console.log(`Playing player ${ self.getNumber() }'s hands.`)
		return new Promise((resolve,reject) => {
			if (self._funds < 1) {
				return resolve({})
			}

			async function run() {
				let hand_index = 0

				do {
					let hand = self.getHands()[hand_index]
					const res = await self.playSpecificHand(shoot,hand,hand_index,dealerCards).catch(err => { throw new Error(err) })
					hand_index++
				} while(hand_index < self._hands.length)

				return {}
			}

			run().then(resolve).catch(reject)
		})
	}


	compareAllHands(dealers_hand) {
		let self = this

		return new Promise((resolve,reject) => {
			async function run() {
				let hand_index = 0

				do {
					let hand = self.getHands()[hand_index]
					const res = await self.compareHand(dealers_hand,hand).catch(err => { throw new Error(err) })
					//console.log('Comparing hands result:',res)
					hand.setWin(1)
					if (res == WIN) {
						self.adjustFunds(hand.getBet())
					} else if (res == WIN_WITH_BLACKJACK) {
						self.adjustFunds(hand.getBet() * 1.5)
					} else if (res == LOSS) {
						hand.setWin(0)
						self.adjustFunds(-hand.getBet())
					} else {
						// Push
						hand.setWin(2)
					}

					const db = await hand.saveToDb()

					hand_index++
				} while(hand_index < self._hands.length)

				return {}
			}

			run().then(resolve).catch(reject)
		})
	}

	getNumber() {
		return this._number
	}

	clearHands() {
		this._hands = []
	}

	getHands() {
		return this._hands
	}

	getFunds() {
		return this._funds
	}

	adjustFunds(val) {
		this._funds += +val
	}

	getBet() {
		return this._bet
	}

	displayFunds() {
		console.log(`Player has`,this.getFunds(),`funds.`)
	}

	initHand(shoot) {
		let self = this
		self._bet = self._initial_bet

		//console.log(`Initializing player ${ self.getNumber() }'s hand. Player is starting with`,self.getFunds(),`funds.`)
		return new Promise((resolve,reject) => {
			// if (self._funds < 1) {
			// 	console.log(`Player ${ self.getNumber() } is out of money.`)
			// 	return resolve({})
			// }

			self.clearHands()
			let hand = HandFactory.create()
			hand.init(shoot,null,null,self.getBet())
			hand.sort()
			self._hands.push(hand)
			return resolve()
		})
	}

	// Need to fix hit.
	shouldContinue(decision,shoot,index,hand) {
		let self = this
		let DONT_CONTINUE = false
		let DO_CONTINUE = true

		if (decision == 'Stand') return DONT_CONTINUE
		if (decision == 'Hit') {
			let card = shoot.getCard()
			hand.addCard(card)
			hand.sort()
			return DO_CONTINUE
		}
		if (decision == 'Split') {
			let [first_card,second_card] = hand.getCards()
			hand.clear()
			hand.addCard(first_card)
			hand.addCard(shoot.getCard())
			hand.sort()

			let new_hand = HandFactory.create()
			new_hand.init(shoot,second_card)
			self._hands.push(new_hand)
			return DO_CONTINUE
		}
		if (decision == 'Double Down') {
			let card = shoot.getCard()
			hand.addCard(card)
			hand.adjustBet(self._bet)
			return DONT_CONTINUE
		}

		console.log(`Invalid decision encountered`,decision)
		return false;
	}

	// Return 'Win','Lost','Push'
	compareHand(dealers_hand,hand) {
		return new Promise((resolve,reject) => {
			const playerValue = hand.getValue()
			const dealerValue = dealers_hand.getValue()
			const playerCards = hand.getCards()
			const dealersCards = dealers_hand.getCards()

			console.log('Comparing dealer hand')
			dealers_hand.display()
			console.log('to player')
			hand.display()

			// Check blackjacks
			const dealerHasBlackjack = dealers_hand.hasBlackJack()
			const playerHasBlackjack = hand.hasBlackJack()
			//hand.setNote(`DealerBJ = ${ dealerHasBlackjack }`)
			//hand.addToNote(`PlayerBJ = ${ playerHasBlackjack }`)
			if (dealerHasBlackjack) {
				if (playerHasBlackjack) {
					//hand.addToNote(`Hand Result = ${ PUSH }`)
					return resolve(PUSH)
				}
				//hand.addToNote(`Hand Result = ${ LOSS }`)
				return resolve(LOSS)
			}

			if (playerValue > 21) return resolve(LOSS)
			if (dealerValue > 21) return resolve(WIN)
			if (dealerValue > playerValue) return resolve(LOSS)
			if (dealerValue == playerValue) return resolve(PUSH)

			if (playerHasBlackjack) return resolve(WIN_WITH_BLACKJACK)
			return resolve(WIN)
		})
	}

}

module.exports = Player