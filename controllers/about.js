const path = require('path');

class AboutController {

    static getAbout(req, res) {
        res.render ('about', { title: 'About Page'} );
    }

}
module.exports = AboutController;