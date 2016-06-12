/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FindCafe.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onListItemClick: function (component, record, item, index, e) {
        this.getViewModel().setData({
            record: record
        });

        var window = Ext.create('FindCafe.view.search.Window');
        window.show();
    },

    onSubItemClick: function () {
        Ext.Msg.alert('Sencha Ext JS', 'Hello, World!');

    }

});
