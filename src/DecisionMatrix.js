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
			if (matrix[index] && matrix[index][value.toString()] && matrix[index][value.toString()][dealerUpCard.display()]) {
				return matrix[index][value.toString()][dealerUpCard.display()]
			}

			return S
		}

		if (first.value() < second.value()) {
			first = cards[1]
			second = cards[0]
		}

		let prop = `${ first.display() },${ second.display() }`

		hand.setProp(prop)
		hand.setDealerCard(dealerUpCard.display())
		
		if (matrix[index][prop]) {
			return matrix[index][prop][dealerUpCard.display()]
		}

		value = first.value() + second.value()

		if (matrix[index] && matrix[index][value.toString()] && matrix[index][value.toString()][dealerUpCard.display()]) {
			return matrix[index][value.toString()][dealerUpCard.display()]
		}

		return S
	}

}

matrix[0] = {
	'2,2'  : {
				// Split - 0% | 3316/9126 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 4087/9861 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 4039/9598 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 4385/9619 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 4125/9910 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 2585/9781 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2313/9607 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2139/9553 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 8105/38427 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 2014/9805 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'3,3'  : {
				// Split - 0% | 3558/9558 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 3516/9214 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 4084/9835 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 4274/9682 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 4114/9515 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 2443/9713 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2447/9577 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2092/9342 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 8047/38088 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 1991/9732 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'4,4'  : {
				// Split - 0% | 3725/9829 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 3827/9738 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 3788/9004 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 4353/9755 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 4064/9576 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 2510/9623 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2510/9663 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2266/9842 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 8332/38558 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 2110/9580 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'5,5'  : {
				// Split - 0% | 3551/9638 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 3664/9639 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 3927/9522 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 3888/9044 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 4208/9735 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 2545/9719 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2298/9439 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2079/9532 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 8231/38955 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 1988/9675 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'6,6'  : {
				// Split - 0% | 3635/9531 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 3750/9326 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 4088/9699 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 4174/9347 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 3663/8632 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 2442/9144 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2341/9445 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2129/9525 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 8265/38128 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 2011/9322 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'7,7'  : {
				// Split - 0% | 3758/8993 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 3942/9323 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 4167/9109 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 4193/9115 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 4074/8797 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 2586/7811 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2406/8943 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2183/9062 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 8660/36819 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 2036/9140 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'8,8'  : {
				// Split - 0% | 4247/9054 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 4420/8963 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 4671/9140 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 4721/8812 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 4617/9020 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 4019/8589 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 2974/7652 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 2868/8874 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 10441/36629 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 2556/9213 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},

	'9,9'  : {
				// Split - 0% | 4858/9138 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 4769/8802 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 5258/9286 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 5245/9028 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 5122/8850 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 4781/9218 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 4456/9111 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 3095/7636 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 12131/35802 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 3046/9137 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'10,10': {
				// Split - 0% | 20681/35463 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 21562/35851 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 22438/35892 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 22988/36177 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 22896/35999 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 20821/35941 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 19201/35187 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 18048/35537 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 57917/133552 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 13963/36412 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},
	'J,J'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'Q,Q'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'K,K'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,A'  : {
				// Split - 0% | 6031/8903 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'2':S,

				// Split - 0% | 5972/8865 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'3':S,

				// Split - 0% | 6027/8962 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'4':S,

				// Split - 0% | 6280/8897 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'5':S,

				// Split - 0% | 5906/8474 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'6':S,

				// Split - 0% | 5700/8550 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'7':S,

				// Split - 0% | 5561/8902 | 500,000 rounds
				// Stand - 0% | 0/0| 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'8':S,

				// Split - 0% | 5251/8774 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'9':S,

				// Split - 0% | 18891/34642 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'10':S,
				'J':S,
				'Q':S,
				'K':S,

				// Split - 0% | 3768/7752 | 500,000 rounds
				// Stand - 0% | 0/0 | 500,000 rounds
				// Hit - 0% | 0/0 | 500,000 rounds
				// Double Down - 0% | 0/0 | 500,000 rounds
				'A':S
			},

	'A,2'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,3'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,4'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,5'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,6'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },

	// Check if doubledown is allowed
	'A,7'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,8'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,9'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },

	'A,10' : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,J'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,Q'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'A,K'  : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },

	'2'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'3'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'4'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'5'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'6'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'7'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'8'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'9'    : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'10'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'11'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },

	'12'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'13'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'14'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'15'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S },
	'16'   : { '2':S,'3':S,'4':S,'5':S,'6':S,'7':S,'8':S,'9':S,'10':S,'J':S,'Q':S,'K':S,'A':S }
}




module.exports = DecisionMatrix