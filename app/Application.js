/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FindCafe.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Ext.dom.Helper'
    ],

    name: 'FindCafe',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        var classic = Ext.toolkit === 'classic';
        var tags = [
            '<div style="position: fixed; right: 0; bottom: ',
            classic ? '0' : '50px',
            '; z-index: 999;">',
            '<img width="100px" ',
            //classic ? '' : ' width="150px" ',
            'src="resources/images/Powered-by-Foursquare.png"/></div>'
        ].join('');
        var element = Ext.DomHelper.createDom(tags);
        Ext.getBody().appendChild(element);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
