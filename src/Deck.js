let DECK_DEFINITION = [
	'A','K','Q','J','10','9','8','7','6','5','4','3','2',
	'A','K','Q','J','10','9','8','7','6','5','4','3','2',
	'A','K','Q','J','10','9','8','7','6','5','4','3','2',
	'A','K','Q','J','10','9','8','7','6','5','4','3','2'
]
let CardFactory = require('./Card.js')

class Deck {
	constructor(options = {}) {
		this._num_of_cards_in_deck = options.numOfCards || 52
		this._cards = []

		this.init()
	}

	static create(options = {}) {
		return new Deck(options)
	}

	init() {
		let self = this
		self._cards = []
		for (let i = 0; i < self._num_of_cards_in_deck; i++) {
			self._cards.push(CardFactory.create({ display:DECK_DEFINITION[i] }))
		}
	}

	getCards() {
		return this._cards
	}

}

module.exports = Deck