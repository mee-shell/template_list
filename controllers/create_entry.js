// Import db_entry
const db_entry = require('../model/entry')

module.exports = function(req, res, next) {
	console.log(req.body);

	db_entry.create(req.body).then(function(new_entry) {
		res.status(201).json(new_entry)
	}).catch(next);
}
