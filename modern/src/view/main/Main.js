/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FindCafe.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'FindCafe.view.main.Detail',
        'FindCafe.view.main.MainController',
        'FindCafe.view.main.MainModel',
        'FindCafe.view.map.View',
        'FindCafe.view.review.View',
        'FindCafe.view.search.View',
        'FindCafe.view.setting.View'
    ],

    controller: 'main',
    viewModel: 'main',

    tabBar: {
        layout: {
            pack : 'center',
            align: 'center'
        },
        docked: 'bottom',
        defaults: {
            iconAlign: 'top'
        }
    },

    scrollable: false,

    tabBarPosition: 'bottom',

    items: [
        {
            title: '検索',
            iconCls: 'x-fa fa-search',
            //layout: 'fit',
            reference: 'stores',
            layout: 'card',
            items: [{
                xtype: 'search-view'
            }, {
                xtype: 'detail'
            }]
        },{
            title: '地図',
            iconCls: 'x-fa fa-map',
            layout: 'fit',
            items: [
                {
                    xtype: 'map-view'
                }
            ]
        },{
            title: '評価',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [
                {
                    xtype: 'review-view'
                }
            ]
        },{
            title: '設定',
            iconCls: 'x-fa fa-cog',
            layout: 'fit',
            items: [
                {
                    xtype: 'setting-view'
                }
            ]
        }
    ]
});
