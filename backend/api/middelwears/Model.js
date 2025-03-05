const mongoose = require('mongoose');

const SuperAdminUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})
const SuperAdmin = mongoose.model('AdminUser', SuperAdminUserSchema);
module.exports = SuperAdmin;