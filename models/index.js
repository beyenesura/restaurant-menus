const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
Menu.schema.add({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
})
module.exports = { Restaurant, Menu }
