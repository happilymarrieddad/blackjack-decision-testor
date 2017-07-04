let mysql = require('mysql')
let config = require('../config.json')

let pool = mysql.createPool(config.db)

let logNoNewLine = function(msg) {
	process.stdout.write(msg)
}

class Hand {
	constructor(options = {}) {
		this._cards = []
		this._bet = options.bet || 5

		this._prop = null
		this._dealer_card = null
		this._win = 0
		this._note = ''
	}

	static create(options = {}) {
		return new Hand(options)
	}

	init(shoot,f_card = null,s_card = null,bet = null) {
		this.clear()
		this._bet = bet || this._bet
		if (!f_card) f_card = shoot.getCard()
		if (!s_card) s_card = shoot.getCard()

		this.addCard(f_card)
		this.addCard(s_card)
		this.sort()
	}

	setNote(msg) {
		this._note = msg
	}

	addToNote(msg) {
		this._note += ' | ' + msg
	}

	getNote() {
		return this._note
	}

	setProp(prop) {
		this._prop = prop
	}

	setDealerCard(dealerCard) {
		this._dealer_card = dealerCard
	}

	setWin(win) {
		this._win = win || 0
	}

	getProp() {
		return this._prop
	}

	getDealerCard() {
		return this._dealer_card
	}

	getWin() {
		return this._win
	}

	saveToDb() {
		let self = this

		return new Promise((resolve,reject) => {
			let post = {
				prop:self.getProp(),
				dealer_card:self.getDealerCard(),
				win:self.getWin(),
				note:self.getNote()
			}

			let qry = `INSERT INTO decision_info SET ?`
			pool.query(qry,post,(err,rows) => {
				if (err) return reject(err)
				return resolve()
			})

		})
	}

	adjustBet(val) {
		this._bet += +val
	}

	clear() {
		this._cards = []
	}

	addCard(card) {
		this._cards.push(card)
	}

	getCards() {
		return this._cards
	}

	display() {
		for (let i = 0;i < this._cards.length; i++) {
			if (i) logNoNewLine(",")
			logNoNewLine(this._cards[i].display())
		}
		console.log(` `,this.getValue())
	}

	sort() {
		this._cards.sort((a,b) => {
			if (a.value > b.value) {
				return -1
			}

			if (a.value < b.value) {
				return 1
			}

			return 0
		})
	}

	getValue() {
		let value = +0
		let usedAce = false

		for (var i = 0; i < this._cards.length; i++) {
			let card = this._cards[i]
			value += +card.value(usedAce,value)
			if (card.display() == 'A' && !usedAce) usedAce = true
		}

		return value
	}

	getBet() {
		return this._bet
	}

	hasBlackJack() {
		if (+this._cards.length == 2) {
			let firstCard = this._cards[0]
			let lastCard = this._cards[1]
			if (firstCard.display() == 'A' || lastCard.display() == 'A') {
				if (['10','J','Q','K'].includes(lastCard.value().toString())) {
					return true
				}
			}
		}
		return false
	}

	// TODO
	hasSoftSeventeen() {
		return false
	}

}

module.exports = Hand