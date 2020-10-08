'use strict';

module.exports = {
    name: require('./package').name,

    addonOptions() {
        const options = (this.parent && this.parent.options) || (this.app && this.app.options);

        return options['ember-trix-editor'] || {};
    },

    included(app)
    {
        this._super.included(app);

        if (this.addonOptions().coreOnly)
        {
            app.import('node_modules/trix/dist/trix-core.js');
        } else {
            app.import('node_modules/trix/dist/trix.js');
        }
        app.import('node_modules/trix/dist/trix.css');
    }
};
