let matrix = []

let S = 'Stand'
let H = 'Hit'
let L = 'Split'
let D = 'Double Down'

class DecisionMatrix {
	constructor(options = {}) {

	}

	static create(options = {}) {
		return new DecisionMatrix(options)
	}

	decide(index = 0,hand,dealerUpCard) {
		let cards = hand.getCards()
		let first = cards[0]
		let second = cards[1]
		let value = 0

		if (cards.length > 2) {
			value = hand.getValue()
			if (value > 16) return S
			return matrix[index][value.toString()][dealerUpCard.display()]
		}

		if (first.value() < second.value()) {
			first = cards[1]
			second = cards[0]
		}

		let prop = `${ first.display() },${ second.display() }`
		
		if (matrix[index][prop]) {
			return matrix[index][prop][dealerUpCard.display()]
		}

		value = first.value() + second.value()

		if (+value > 16) return S

		return matrix[index][value.toString()][dealerUpCard.display()]
	}

}

matrix[0] = {
	'2,2'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':L,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'3,3'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':L,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'4,4'  : { '2':H,'3':H,'4':H,'5':L,'6':L,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'5,5'  : { '2':D,'3':D,'4':D,'5':D,'6':D,'7':D,'8':D,'9':D,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'6,6'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'7,7'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':L,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'8,8'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':L,'8':L,'9':L,'10':L,'J':L,'Q':L,'K':L,'A':L },
	'9,9'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':S,'8':L,'9':L,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'10,10': { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'J,J'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'Q,Q'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'K,K'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,A'  : { '2':L,'3':L,'4':L,'5':L,'6':L,'7':L,'8':L,'9':L,'10':L,'J':L,'Q':L,'K':L,'A':L },

	'A,2'  : { '2':H,'3':H,'4':H,'5':D,'6':D,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'A,3'  : { '2':H,'3':H,'4':H,'5':D,'6':D,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'A,4'  : { '2':H,'3':H,'4':D,'5':D,'6':D,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'A,5'  : { '2':H,'3':H,'4':D,'5':D,'6':D,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'A,6'  : { '2':H,'3':D,'4':D,'5':D,'6':D,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },

	// Check if doubledown is allowed
	'A,7'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'A,8'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,9'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,10' : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,J'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,Q'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,K'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },

	'2'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'3'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'4'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'5'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'6'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'7'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'8'    : { '2':H,'3':H,'4':H,'5':H,'6':H,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'9'    : { '2':H,'3':D,'4':D,'5':D,'6':D,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'10'   : { '2':D,'3':D,'4':D,'5':D,'6':D,'7':D,'8':D,'9':D,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'11'   : { '2':D,'3':D,'4':D,'5':D,'6':D,'7':D,'8':D,'9':D,'10':D,'J':D,'Q':D,'K':D,'A':H },

	'12'   : { '2':H,'3':H,'4':S,'5':S,'6':S,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'13'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'14'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'15'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H },
	'16'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':H,'8':H,'9':H,'10':H,'J':H,'Q':H,'K':H,'A':H }
}




module.exports = DecisionMatrix