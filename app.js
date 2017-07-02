let NUM_OF_ROUNDS = 1000
let NUM_OF_PLAYERS = 1

let GameFactory = require('./src/Game.js')
let Game = GameFactory.create({
	numOfPlayers:NUM_OF_PLAYERS
})

async function run() {

	await Game.init()

	let round = 1
	do {
		const res = await Game.playRound(round).catch(err => { throw new Error(err) })
	} while(round++ != NUM_OF_ROUNDS)

	return
}

run()
	.then(() => {
		console.log('Application finished!')
	})
	.catch(err => {
		console.log(`Application error: `,err)
	})