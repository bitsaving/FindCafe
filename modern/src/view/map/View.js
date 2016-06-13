/**
 * Created by kawanoshinobu on 2016/04/24.
 */
Ext.define('FindCafe.view.map.View', {
    extend: 'Ext.Container',

    requires: [
        'FindCafe.store.Venues',
        'FindCafe.view.CustomMap'
    ],

    xtype: 'map-view',

    layout: 'fit',

    items: [
        {
            xtype: 'titlebar',
            title: '<i class="fa fa-map"></i> 地図',
            cls: 'header',
            docked: 'top'
        },
        {
            xtype: 'custom-map',
            store: {
                type: 'venues'
            }
        }
    ]

});
