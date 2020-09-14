const Email = require('email-templates');
const nodemailer = require('nodemailer');

sendEmail({
    username: 'Michael Zhao',
    sendToEmail: 'michaelzhao314@gmail.com',
    eventName: 'Hot Party!!!',
    eventContact: 'Miguel',
    eventContactUrl: 'https://www.facebook.com/mikey314/',
    eventUrl: 'https://michaelzhao.xyz',
    notificationOffset: 10,
    startTime: '8/14 11:00PM',
    imageUrl: 'https://api.michaelzhao.xyz/images/hotdude.png',
    zoomUrl: 'https://zoom.us',
    unsubscribeUrl: 'https://michaelzhao.xyz/about',
    waitlistPos: 3,
    shifts: ['8/14/20 1:00PM - 2:00 PM', '8/15/20 11:00AM - 12:00PM'],
    messageType: 'upcoming_activity'
});

/**
 * @param {object} params The variables to be passed into the template
 * @param {string} params.username The name of the user
 * @param {string} params.sendToEmail The email address of the user that the email will be sent to
 * @param {string} params.eventName The name of the event
 * @param {string} [params.eventContact] The name of the person to contact for this event
 * @param {string} params.eventUrl The URL to go to if the user clicks on the 'View Event' button
 * @param {number} [params.notificationOffset] The time left until the given activity begins
 * @param {number} [params.startTime] The time that the event begins
 * @param {string} params.imageUrl The event image's URL
 * @param {string} [params.zoomUrl] The link to the zoom call for the event
 * @param {string} params.unsubscribeUrl The link to the user's account settings where they can unsubscribe
 * @param {number} [params.waitlistPos] The position the user is on the waitlist
 * @param {Array[string]} [params.shifts] The string array of shifts
 * @param {'upcoming_activity' | 'upcoming_registration' | 'waitlist' | 'registration_confirmed' | 'promoted_from_waitlist' | 'upcoming_shifts'} params.messageType The type of message
 */
function sendEmail(params) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'test102394@gmail.com', // Test gmail account
            pass: 'testAccountPassword', // Replace with actual account/password
        },
    });

    const email = new Email({
        message: {
            from: 'test102394@gmail.com',
        },
        transport: transporter,
        send: true,
    });

    email
        .send({
            template: 'events',
            message: {
                to: params.sendToEmail,
            },
            locals: params,
        })
        .then(console.log)
        .catch(console.error);
}
