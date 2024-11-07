

class IndexController {

    static getIndex(req, res) {
        res.render ('index', { title: 'Index Page'} );
    }

}
module.exports = IndexController;