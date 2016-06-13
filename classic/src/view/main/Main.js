/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FindCafe.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.layout.container.Fit',
        'Ext.layout.container.boxOverflow.None',
        'Ext.plugin.Responsive',
        'Ext.plugin.Viewport',
        'FindCafe.view.main.MainController',
        'FindCafe.view.main.MainModel',
        'FindCafe.view.map.View',
        'FindCafe.view.review.View',
        'FindCafe.view.search.View',
        'FindCafe.view.setting.View'
    ],

    controller: 'main',
    viewModel: 'main',

    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-coffee'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: '検索',
        iconCls: 'fa-search',
        layout: 'fit',
        items: [{
            xtype: 'search-view'
        }]
    }, {
        title: '地図',
        iconCls: 'fa-map',
        layout: 'fit',
        items: [{
            xtype: 'map-view'
        }]
    }, {
        title: 'レビュー',
        iconCls: 'fa-users',
        layout: 'fit',
        items: [{
            xtype: 'review-view'
        }]
    }, {
        title: '設定',
        iconCls: 'fa-cog',
        layout: 'fit',
        items: [{
            xtype: 'setting-view'
        }]
    }],

    listeners: {
        tabchange: 'onTabChange'
    }
});
