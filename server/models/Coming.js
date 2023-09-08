const mongoose = require('mongoose');

const upComingSchema = new mongoose.Schema({

    tag_id: { type: Number },
    name: { type: String },
    description: { type: String }

})
const upComingModel = mongoose.model('upComing', upComingSchema, 'upComings');

module.exports = upComingModel;