const mongoose = require('mongoose')

const Typeform = mongoose.model('typeform', {
    score: {
        type: Number,
    },
    full_name: {
        type: String,
    },
    first: {
        type: String,
    },
    last: {
        type: String,
    },
    area: {
        type: String,
    },
    city: {
        type: String,
    },
    zip: {
        type: Number,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    phone2: {
        type: Number,
    },
    email2: {
        type: String,
    },
    phone3: {
        type: Number,
    },
    email3: {
        type: String,
    },
    credit: {
        type: Number,
    },
    credit2: {
        type: Number,
    },
    beds: {
        type: Number,
    },
    baths: {
        type: Number,
    },
    credit_select: {
        type: String,
    },
    features: {
        type: String,
    },
    wants: {
        type: String,
    },
    price: {
        type: Number,
    },
    timeframe: {
        type: String
    },
    selling: {
        type: String,
    },
    sellingzip: {
        type: Number,
    },
    own_rent: {
        type: String,
    }, 
    housing_payment: {
        type: Number,
    },
    found_a_home: {
        type: Boolean,
    },
    address: {
        type: String,
    },
    has_realtor: {
        type: Boolean,
    },
    decided_price: {
        type: Number,
    },
    requested_price: {
        type: Number,
    },
    price_range: {
        type: Number,
    },
    va: {
        type: Boolean,
    },
    down_payment: {
        type: String,
    },
    any_credit_issue: {
        type: Boolean,
    },
    income: {
        type: Number,
    },
    credit_repair: {
        type: Boolean,
    },
    call_me: {
        type: Boolean,
    },
    when_to_call: {
        type: String,
    },
    time_to_call: {
        type: String,
    },
    am_or_pm : {
        type: String,
    },
    id: {
        type: String,
    },
    airtable: {
        type: Boolean,
    },
    fb: {
        type: Boolean,
    }
})

module.exports = Typeform
