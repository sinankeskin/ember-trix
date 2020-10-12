'use strict';

module.exports = {
    name: require('./package').name,
	addonOptions()
	{
		const options = (this.parent && this.parent.options) || (this.app && this.app.options);
		return options['ember-trix'] || {};
	},

	/**
	 * Import trix.js from node_modules
	 * @param app
	 */
	included(app)
	{
		this._super.included.apply(this, arguments);
		if (this.addonOptions().coreOnly)
		{
			app.import('node_modules/trix/dist/trix-core.js');
		}
		else
		{
			app.import('node_modules/trix/dist/trix.js');
		}
		app.import('node_modules/trix/dist/trix.css');
	}
};
