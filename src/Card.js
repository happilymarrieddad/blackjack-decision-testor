

class Card {
	constructor(options = {}) {
		this._display = options.display || 'A'
	}

	static create(options = {}) {
		return new Card(options)
	}

	display() {
		return this._display
	}

	value(hasAce = false,lastValue = 0) {
		if (isNaN(+this.display())) {
			if (this.display() == 'A') {
				if (hasAce || lastValue > 10) return 1
				return 11
			}
			return 10
		}

		return +this.display()
	}

}

module.exports = Card