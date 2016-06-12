/**
 * This view is an example list of people.
 */
Ext.define('FindCafe.view.search.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'search-view',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Fill',
        'FindCafe.store.Venues'
    ],

    title: '検索',
    glyph: 'xf002@FontAwesome',

    store: {
        type: 'venues'
    },

    frame: true,

    tbar: [
        {
            xtype: 'textfield',
            emptyText: '検索したいエリアを指定して下さい',
            label: '',
            maxWidth: '300',
            minWidth: '300'
        },
        {
            xtype: 'button',
            glyph: 'xf002@FontAwesome'
        },
        '->',
        {
            xtype: 'button',
            text: 'オプション',
            width: 120,
            menu: [
                {
                    text: 'Item 1',
                    menu: [
                        {
                            text: 'Sub Item',
                            handler: 'onSubItemClick'
                        }
                    ]
                },
                {
                    text: 'Item 2'
                }
            ]
        }
    ],

    columns: [
        {text: '店舗名', dataIndex: 'name', flex: 1, renderer: function (value, metaData) {
            //metaData.style = "font-weight:bold;color:#2d5be3;";
            metaData.style = "font-weight:bold;";
            return value;
        }},
        {text: '住所', dataIndex: 'address', flex: 1 },
        {text: 'レビュー', dataIndex: 'ratingSignals', width: 100, renderer: function (v) {
            return v + '件';
        }},
        {text: '評価', dataIndex: 'rating', width: 100, renderer: function (value, metaData) {
            metaData.style = "font-weight:bold;color:#E91E63;";
            return value;
        }}
    ],

    listeners: {
        itemclick: 'onListItemClick'
    }

});
