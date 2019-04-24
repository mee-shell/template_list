// Import db_entry
const db_entry = require('../model/entry')

module.exports = function(req, res, next) {
	db_entry.find({}).then(function(entries) {
		res.json(entries)
	})
}
