let HandFactory = require('./hand.js')

let STAND = 'Stand'
let HIT = 'Hit'
let SPLIT = 'Split'
let DOUBLEDOW = 'Double Down'

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

		//console.log(`Initializing dealer's hand`)
		return new Promise((resolve,reject) => {
			self.clearHand()

			self.clearHand()
			let hand = HandFactory.create()
			hand.init(shoot)
			hand.sort()
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
		//console.log('Play dealer\'s hand')
		return new Promise((resolve,reject) => {
			async function run() {
				let cont = true
				
				while(cont) {
					//hand.display()
					let decision = await self.makeDecision(hand).catch(err => { console.log('Error in Dealer.playHand.makeDecision');throw new Error(err) })
					//console.log(`Decision:`,decision)
					cont = self.shouldContinue(decision,shoot,hand)
					//console.log(`Are we going to continue?`,cont)
				}

				return {}
			}

			run().then(resolve).catch(reject)
		})
	}

	makeDecision(hand) {
		let self = this

		return new Promise((resolve,reject) => {
			let value = hand.getValue()
			if (+value < 17) return resolve(HIT)
			return resolve(STAND)
		})
	}

	shouldContinue(decision,shoot,hand) {
		let self = this

		if (decision == 'Stand') return false
		if (decision == 'Hit') {
			let card = shoot.getCard()
			self._hand.addCard(card)
			return true
		}

		console.log(`Invalid decision encountered`,decision)
		return false;
	}

}

module.exports = Dealer