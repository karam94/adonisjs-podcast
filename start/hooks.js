'use strict'

const {hooks} = require('@adonisjs/ignitor')

// https://adonisjs.com/docs/4.1/ignitor
// Allows us to globally generate the apps URL to use elsewhere.
hooks.after.providersBooted(() => {
    const View = use('Adonis/Src/View')

    View.global('appUrl', path => {
        const Env = use('Env')

        const APP_URL = Env.get('APP_URL')

        return path ? `${APP_URL}/${path}` : APP_URL
    })

    View.global('encodeURIComponent', token => {
        return encodeURIComponent(token)
    })

    View.global('paginationLinks', total => {
        return Array.from(new Array(total), (value, index) => {
            return index + 1
        })
    })
})