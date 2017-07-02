let DeckFactory = require('./Deck.js')
let RESHUFFLE_PERCENTAGE = 0.2

class Shoot {
	constructor(options = {}) {
		this._num_of_cards_in_deck = options.numOfCards || 52
		this._num_of_decks = options.numOfDecks || 1
		this._decks = []
	}

	static create(options = {}) {
		return new Shoot(options)
	}

	init() {
		let self = this
		self._decks = []
		let len = self.getNumDecks()
		//console.log('Building shoot with',len,'deck(s)')
		for (let i = 0; i < len; i++) {
			self._decks = self._decks.concat(DeckFactory.create().getCards())
		}
		self.shuffle()
	}

	valueOf() {
		return this._decks
	}

	display() {
		console.log(this._decks)
	}

	shuffle() {
		//console.log('Shuffling shoot')
	    for (let i = this._decks.length; i; i--) {
	        let j = Math.floor(Math.random() * i);
	        [this._decks[i - 1], this._decks[j]] = [this._decks[j], this._decks[i - 1]];
	    }	
	}

	check() {
		//console.log('Checking to see if shoot needs to be rebuilt and shuffled')
		if (this.getTotalNumCards() * RESHUFFLE_PERCENTAGE > this._decks.length) this.init()
	}

	getNumDecks() {
		return this._num_of_decks
	}

	getTotalNumCards() {
		return this._num_of_decks * this._num_of_cards_in_deck
	}

	getCard() {
		return this._decks.pop()
	}

}

module.exports = Shoot