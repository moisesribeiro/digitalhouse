const estados = require('./estados.json')
const stringEstados = JSON.stringify(estados)

//console.log(estados)

console.log(stringEstados)
console.log(JSON.parse(stringEstados))

