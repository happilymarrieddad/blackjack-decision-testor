let logNoNewLine = function(msg) {
	process.stdout.write(msg)
}

class Hand {
	constructor(options = {}) {
		this._cards = []
	}

	static create(options = {}) {
		return new Hand(options)
	}

	init(shoot,f_card = null,s_card) {
		this.clear()

		this.addCard(f_card || shoot.getCard())
		this.addCard(s_card || shoot.getCard())
	}

	clear() {
		this._cards = []
	}

	addCard(card) {
		this._cards.push(card)
	}

	display() {
		for (let i = 0;i < this._cards.length; i++) {
			if (i) logNoNewLine(",")
			logNoNewLine(this._cards[i].display())
		}
		console.log(' ')
	}

}

module.exports = Hand