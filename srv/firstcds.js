//module.exports is an instruction to Node.js to export first function
//below to be exported so that other files can access the first function defined

module.exports = (firstcds) => {
firstcds.on ('first', req =>  'Learning')
}