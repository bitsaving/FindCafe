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

    },

    /**
     * @param {Ext.tab.Panel} tabPanel
     * @param {Ext.Component} newCard
     * @param {Ext.Component} oldCard
     */
    onTabChange: function (tabPanel, newCard, oldCard) {
        var view = newCard.down('map-view');
        if (view) {
            view.down('custom-map').redraw();
        }
    },

    /**
     * @param {Ext.dataview.DataView} component
     * @param {Number} index
     * @param {Ext.Element/Ext.dataview.component.DataItem} target
     * @param {Ext.data.Model} record
     * @param {Ext.event.Event} e
     */
    onListItemTap: function (component, index, target, record, e) {
        var me = this,
            page = me.lookup('stores');

        me.getViewModel().setData({
            record: record
        });

        page.animateActiveItem(1, {
            type: 'slide',
            direction: 'left'
        });
    },

    /**
     * @param {Ext.Button} component
     * @param {Ext.EventObject} e
     */
    onTapBackButton: function (component, e) {
        var me = this,
            page = me.lookup('stores');

        page.animateActiveItem(0, {
            type: 'slide',
            direction: 'right'
        });
    }

});
