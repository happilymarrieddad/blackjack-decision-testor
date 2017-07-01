let HandFactory = require('./Hand.js')
let CardFactory = require('./Card.js')

class Player {
	constructor(options = {}) {
		this._number = options.number || 1
		this._hands = []
		this._initial_bet = options.bet || 5
		this._bet = this._initial_bet
		this._initial_money = options.initialMoney || 500
		this._funds = this._initial_money
		this._playsRounds = true

		Object.assign(this,options)
	}

	static create(options = {}) {
		return new Player(options)
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

	initHand(shoot) {
		let self = this
		self._bet = self._initial_bet

		console.log(`Initializing player ${ self.getNumber() }'s hand.`)
		return new Promise((resolve,reject) => {
			if (self._funds < 1) {
				console.log(`Player ${ self.getNumber() } is out of money.`)
				return resolve({})
			}

			self.clearHands()
			let hand = HandFactory.create()
			hand.init(shoot)
			self._hands.push(hand)
			return resolve()
		})
	}

	playHands(shoot) {
		let self = this

		console.log(`Playing player ${ self.getNumber() }'s hands.`)
		return new Promise((resolve,reject) => {
			if (self._funds < 1) {
				return resolve({})
			}

			async function run() {
				let hand_index = 0

				do {
					let hand = self.getHands()[hand_index]
					const res = await self.playSpecificHand(shoot,hand,hand_index).catch(err => { throw new Error(err) })
					hand_index++
				} while(hand_index < self._hands.length)

				return {}
			}

			run().then(resolve).catch(reject)
		})
	}

	playSpecificHand(shoot,hand,index) {
		let self = this

		return new Promise((resolve,reject) => {
			async function run() {
				let cont = true
				
				while(cont) {
					console.log('Making a decision from cards')
					hand.display()
					let decision = await self.makeDecision(hand)
					console.log(`Decision:`,decision)
					cont = self.shouldContinue(decision,shoot,index,hand)
					console.log(`Are we going to continue?`,cont)
				}

				return {}	
			}

			run().then(resolve).catch(reject)
		})
	}

	makeDecision(hand) {
		let self = this

		return new Promise((resolve,reject) => {

			return resolve('Stand')
		})
	}

	shouldContinue(decision,shoot,index,hand) {
		let self = this

		if (decision == 'Stand') return false
		if (decision == 'Hit') {
			let hand = HandFactory.create()
			hand.init(shoot)
			self._hands.push(hand)
			return true
		}
		// if (decision == 'Split') {
		// 	let [first_card,second_card] = hand
		// 	hand.clear()
		// 	hand.addCard(first_card)
		// 	hand.addCard(shoot.getCard())

		// 	let new_hand = HandFactory.create()
		// 	new_hand.init(shoot,second_card)
		// 	self._hands.push(new_hand)
		// 	return true
		// }
		// if (decision == 'Double Down') {
		// 	hand.addCard(first_card)
		// 	self._funds -= self._bet
		// 	self._bet *= 2
		// 	return false
		// }

		console.log(`Invalid decision encountered`,decision)
		return false;
	}

}

module.exports = Player