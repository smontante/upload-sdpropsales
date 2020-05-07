const mongoose = require('mongoose')

const Sellers = mongoose.model('Sellers', {
    address: {
        type: String, 
    },
    asset_conditions: {
        type: String,
    },
    baths: {
        type: Number,
    },
    beds: {
        type: Number,
    },
    cc_1: {
        type: Boolean,
    },
    cc_2: {
        type: Boolean,
    },
    cc_3: {
        type: Boolean,
    },
    contact_person: {
        type: String,
    },
    deal_status: {
        type: String,
    },
    dnc_status: {
        type: String,
    },
    dnc_status_2: {
        type: String,
    },
    eb_1: {
        type: Boolean
    },
    eb_2: {
        type: Boolean
    },
    eb_3: {
        type: Boolean
    },
    email: {
        type: String
    },
    email_2: {
        type: String
    },
    equity: {
        type: String
    },
    lead_level: {
        type: String
    },
    lead_type: {
        type: String
    },
    mailing_address: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    phone_2: {
        type: String
    },
    rvm_1: {
        type: Boolean
    },
    rvm_2: {
        type: Boolean
    },
    rvm_3: {
        type: Boolean
    },
    sq_feet: {
        type: String
    },
    stage: {
        type: String
    },
    take_off_list: {
        type: Boolean
    },
    tmb_1: {
        type: Boolean
    },
    tmb_2: {
        type: Boolean
    },
    tmb_3: {
        type: Boolean
    },
    value: {
        type: String
    }
})

module.exports = Sellers