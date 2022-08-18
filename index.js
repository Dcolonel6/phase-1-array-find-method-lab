// code your solution here
const superbowlWin = listOfObjects => {
    const game =  listOfObjects.find(game => game.year && game.result ? game.result === 'W' :undefined)
    return game ? game.year : game
}
