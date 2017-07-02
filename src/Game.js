let PlayerFactory = require('./Player.js')
let DealerFactory = require('./Dealer.js')
let ShootFactory = require('./Shoot.js')

class Game {
	constructor(options = {}) {
		this._num_of_players = options.numOfPlayers || 1
		this._players = []
		this._dealer = DealerFactory.create()
		this._shoot = ShootFactory.create({ numOfDecks:8 })

		this.initPlayers()
	}

	static create(options = {}) {
		return new Game(options)
	}

	init() {
		let self = this

		return new Promise((resolve,reject) => {
			//console.log('Game initialized.')
			return resolve()
		})
	}

	initPlayers() {
		if (isNaN(+this._num_of_players) || this._num_of_players < 1) throw new Error(`Failed to initialize players.`)
		for (let i = 0;i < this._num_of_players; i++) {
			this._players.push(PlayerFactory.create({ number:i+1 }))
		}
	}

	checkShoot() {
		this._shoot.check()
	}

	getPlayers() {
		return this._players
	}

	getDealer() {
		return this._dealer
	}

	getShoot() {
		return this._shoot
	}

	playRound(round) {
		let self = this
		self.checkShoot()

		console.log('Playing round',round)
		return new Promise((resolve,reject) => {
			
			async function run() {
				// Initialize each players hand
				await Promise.all(self.getPlayers().map(async player => await player.initHand(self.getShoot())))
				await self.getDealer().initHand(self.getShoot())

				// Play each players hand
				for (const index in self._players) {
					let player = self._players[index]
					const res = await player.playHands(self.getShoot(),self.getDealer().getHand().getCards())
						.catch(err => { console.log('Error in Player.playHands');throw new Error(err) })
				}

				// Play dealers hand
				const dealer_res = await self.getDealer()
					.playHand(self.getShoot())
					.catch(err => { console.log('Error in Dealer.playHand');throw new Error(err) })

				// Compare dealers hand with player's hand(s)
				for (const index in self._players) {
					let player = self._players[index]
					await player.compareAllHands(self.getDealer().getHand())
						.catch(err => { console.log('Error in Player.compareAllHands');throw new Error(err) })

					player.displayFunds()
				}

				return {}
			}

			run().then(resolve).catch(reject)

		})
	}

}

module.exports = Game