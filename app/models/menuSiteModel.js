var mongoose = require('mongoose'),
Schema = mongoose.Schema;

module.exports = function() {

    var menuSiteSchema = mongoose.Schema({
        titleMenu: {
            type: String,
            required: true
        },
        submenus: [Schema.Types.ObjectId],
        statusMenu: {
            type: Boolean,
            default: true
        },
        urlMenu: {
            type: String
        },
        isSubmenu: {
            type: Boolean,
            default: false
        },
        orderMenu: {
            type: Number
        }
    });

    return mongoose.model('MenuSite', menuSiteSchema);
};
