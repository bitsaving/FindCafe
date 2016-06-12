/**
 * This view is an example list of people.
 */
Ext.define('FindCafe.view.venue.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'venue-view',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Fill',
        'FindCafe.store.Venues'
    ],

    title: '店舗',
    glyph: 'xf015@FontAwesome',

    store: {
        type: 'venues'
    },

    frame: true,

    tbar: [
        {
            xtype: 'textfield',
            emptyText: '検索したいエリアを指定して下さい',
            label: '',
            width: '300',
            maxWidth: '300',
            minWidth: '300'
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
        {text: '店舗名', dataIndex: 'name', flex: 1 },
        {text: '住所', dataIndex: 'address', flex: 1 },
        {text: 'レビュー', dataIndex: 'ratingSignals', width: 100, renderer: function (v) {
            return v + '件';
        }},
        {text: '評価', dataIndex: 'rating', width: 100, renderer: function (v) {
            return '<span style="color:#E91E63;">' + v + '</span>';
        }}
    ],

    listeners: {
        itemclick: 'onListItemClick'
    }

});
