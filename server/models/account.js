import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const Account = new Schema({
    roastType:      String,
    roastByDate:    String,
    roastLocation:  String,
    username:       { type: String, unique: true },
    password:       String,
    address:        String,
    state:          String,
    email:          String,
    city:           String,
    zipcode:        String,
    country:        String,
    plan:           String,
    charge_id:      String,
    created:        { type: Date, default: Date.now },
    // last_logged_in: Date
});

// generates hash
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

// compares the password
Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('account', Account);