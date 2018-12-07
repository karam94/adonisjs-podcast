'use strict'

const Event = use('Event')
const Mail = use('Mail')

Event.on('forgot::password', async (data) => {
    await Mail.send('auth/emails/password_reset', data, (message) => {
        message
            .to(data.user.email)
            .from('hello@podcast.com')
            .subject('Password reset link')
    })
})

Event.on('password::reset', async (data) => {
    await Mail.send('auth/emails/password_reset_success', data, (message) => {
        message
            .to(data.user.email)
            .from('hello@podcast.com')
            .subject('Password reset successful')
    })
})