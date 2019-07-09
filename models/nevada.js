const mongoose = require('mongoose')

const Nevada = mongoose.model('nevada', {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    primary_phone: {
        type: String,
    },
    secondary_phone: {
        type: String,
    },
    property_address: {
        type: String,
    },
    price_range: {
        type: String,
    },
    min_bedrooms: {
        type: Number,
    },
    min_bathrooms: {
        type: Number,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    how_soon: {
        type: String,
    },
    reason_for_buying: {
        type: String,
    },
    loan_status: {
        type: String,
    },
    down_payment: {
        type: String,
    },
    property_type: {
        type: String,
    },
    credit_rating: {
        type: String,
    },
    last_updated: {
        type: String,
    },
    additional_info: {
        type: String,
    },
    source_file: {
        type: String,
    },
    source: {
        type: String
    }
})

module.exports = Nevada

// nvLead = {
//     name: result[i].name,
//     email: result[i].email,
//     primary_phone: result[i].primary_phone,
//     secondary_phone: result[i].secondary_phone,
//     property_address: result[i].property_address,
//     price_range: result[i].price_range,
//     min_bedrooms: result[i].min_bedrooms,
//     min_bathrooms: result[i].min_bathrooms,
//     city: result[i].city,
//     state: result[i].state,
//     how_soon: result[i].how_soon,
//     reason_for_buying: result[i].reason_for_buying,
//     loan_status: result[i].loan_status,
//     down_payment: result[i].down_payment,
//     property_type: result[i].property_type,
//     credit_rating: result[i].credit_rating,
//     last_updated: result[i].last_updated,
//     additional_info: result[i].last_updated,
//     source_file: result[i].source_file,
//     source: result[i].source
// }