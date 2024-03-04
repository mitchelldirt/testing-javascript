const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Grabbing the original value
const originalGetWinner = utils.getWinner

// Monkey patching the getWinner method on utils to force it to return player 1 as the result
utils.getWinner = (p1, p2) => p1

// This is no longer random, it's being mocked and will always result in Kent C. Dodds as the winner
const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup the code so that tests later on aren't impacted as they may not want to mock
utils.getWinner = originalGetWinner
