'use strict'

class TestController {
    index({ view }) {
        return view.render('welcome')
    }
}

module.exports = TestController