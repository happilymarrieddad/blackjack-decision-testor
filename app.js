let NUM_OF_ROUNDS = 10 * 1000 * 1000
let NUM_OF_PLAYERS = 1

let moment = require('moment')
let GameFactory = require('./src/Game.js')
let Game = GameFactory.create({
	numOfPlayers:NUM_OF_PLAYERS
})

let start_time = moment().format("MM/DD/YYYY HH:mm:ss")

async function run() {

	await Game.init()

	let round = 1
	do {
		const res = await Game.playRound(round).catch(err => { throw new Error(err) })
	} while(round++ != NUM_OF_ROUNDS)

	return
}

run()
	.then(() => console.log('Application finished. Started at',start_time,' Finished at',moment().format('MM/DD/YYYY HH:mm:ss')))
	.catch(err => console.log(`Application error: `,err))
