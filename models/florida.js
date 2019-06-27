const mongoose = require('mongoose')

const Florida = mongoose.model('florida', {
    id: {
        type: String,
    },
    created_time: {
        type: String,
    },
    ad_id: {
        type: String,
    },
    ad_name: {
        type: String,
    },
    adset_id: {
        type: String,
    },
    adset_name: {
        type: String,
    },
    campaign_id: {
        type: String,
    },
    campaign_name: {
        type: String,
    },
    form_id: {
        type: String,
    },
    form_name: {
        type: String,
    },
    is_organic: {
        type: String,
    },
    zip_code: {
        type: String,
    },
    email: {
        type: String,
    },
    full_name: {
        type: String,
    },
    phone_number: {
        type: String,
    }
})

module.exports = Florida



    // flLead = {
    //     id: result[i].id,
    //     created_time: result[i].created_time,
    //     ad_id: result[i].ad_id,
    //     ad_name: result[i].ad_name,
    //     adset_id: result[i].adset_id,
    //     adset_name: result[i].adset_name,
    //     campaign_id: result[i].campaign_id,
    //     campaign_name: result[i].campaign_name,
    //     form_id: result[i].form_id,
    //     form_name: result[i].form_name,
    //     is_organic: result[i].is_organic,
    //     zip_code: result[i].zip_code,
    //     email: result[i].email,
    //     full_name: result[i].full_name,
    //     phone_number: result[i].phone_number
    // }