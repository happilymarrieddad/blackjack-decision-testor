

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

	value(hasAce = false) {
		console.log('Checking the value of',this.display(),hasAce)
		if (isNaN(+this._display)) {
			if (this._display == 'A') {
				if (hasAce) return 1
				return 11
			}
			return 10
		}

		return +this
	}

}

module.exports = Card