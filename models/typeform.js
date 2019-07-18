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
        type: String,
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
        type: String,
    },
    address: {
        type: String,
    },
    has_realtor: {
        type: String,
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
        type: String,
    },
    down_payment: {
        type: Number,
    },
    any_credit_issue: {
        type: String,
    },
    income: {
        type: Number,
    },
    credit_repair: {
        type: String,
    },
    call_me: {
        type: String,
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
        type: String,
    },
    fb: {
        type: String,
    }
})

module.exports = Typeform
