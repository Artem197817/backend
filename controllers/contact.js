const path = require('path');

class ContactController {

    static getContact(req, res) {
        res.render ('contact', { title: 'Contact Page'} );
    }

}
module.exports = ContactController;