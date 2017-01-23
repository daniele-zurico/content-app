"use strict";
require('./polyfills.ts');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');

module.exports = {
    bootstrap: function() {
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
    }
}
