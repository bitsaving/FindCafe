/**
 * This view is an example list of people.
 */
Ext.define('FindCafe.view.search.View', {
    extend: 'Ext.List',
    xtype: 'search-view',

    requires: [
        'Ext.field.Text',
        'FindCafe.store.Venues'
    ],

    store: {
        type: 'venues'
    },

    itemTpl: '{name}',

    listeners: {
        itemtap: 'onListItemTap'
    },

    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            cls: 'header',
            items: [
                {
                    xtype: 'textfield',
                    align: 'center',
                    placeHolder: '検索したいエリアを指定して下さい'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    ui: 'action',
                    iconCls: 'x-fa fa-search'
                }
            ]
        }
    ]

});
