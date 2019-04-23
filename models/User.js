let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
	id: {type :String, required: true, unique: true},
	password: {type :String, required: true},
	state : { type : Boolean }
});

mongoose.model('users',UserSchema);

module.exports = mongoose.model('users');