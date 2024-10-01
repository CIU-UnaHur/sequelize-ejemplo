const Persona = require('./Persona')
const Pasaporte = require('./Pasaporte')

Persona.hasOne(Pasaporte)
Pasaporte.belongsTo(Persona)

module.exports = {
    Persona,
    Pasaporte
}