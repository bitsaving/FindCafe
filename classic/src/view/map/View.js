/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.map.View', {
    extend: 'Ext.panel.Panel',
    xtype: 'map-view',

    requires: [
        'Ext.layout.container.Fit',
        'FindCafe.store.Venues',
        'FindCafe.view.CustomMap'
    ],

    title: '地図',
    glyph: 'xf278@FontAwesome',

    items: [
        {
            xtype: 'custom-map',
            store: {
                type: 'venues'
            }
        }
    ],

    layout: 'fit',
    frame: true

    //listeners: {
    //    afterrender: 'onMapViewAfterrender'
    //}
});