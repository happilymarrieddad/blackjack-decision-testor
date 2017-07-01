let HandFactory = require('./hand.js')

class Dealer {
	constructor(options = {}) {
		this._hand = null
		Object.assign(this,options)
	}

	static create(options = {}) {
		return new Dealer(options)
	}

	initHand(shoot) {
		let self = this

		console.log(`Initializing dealer's hand`)
		return new Promise((resolve,reject) => {
			self.clearHand()

			self.clearHand()
			let hand = HandFactory.create()
			hand.init(shoot)
			self.setHand(hand)
			return resolve()
		})
	}

	setHand(hand) {
		this._hand = hand
	}

	getHand() {
		return this._hand
	}

	clearHand() {
		this._hand = null
	}

	playHand(shoot) {
		let self = this

		let hand = self.getHand()
		console.log('Play dealer\'s hand')
		return new Promise((resolve,reject) => {
			async function run() {
				let cont = true
				
				while(cont) {
					console.log('Making a decision from cards')
					hand.display()
					let decision = await self.makeDecision(hand).catch(err => { console.log('Error in Dealer.playHand.makeDecision');throw new Error(err) })
					console.log(`Decision:`,decision)
					cont = self.shouldContinue(decision,shoot,hand)
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

	shouldContinue(decision,shoot,hand) {
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

module.exports = Dealer