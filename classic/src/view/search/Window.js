/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.search.Window', {
    extend: 'Ext.window.Window',

    xtype: 'venuewindow',

    requires: [
        'Ext.form.Label',
        'Ext.layout.container.VBox'
    ],

    title: '店舗詳細',

    width: '600px',
    height: '90%',
    modal: true,

    layout: 'vbox',
    padding: '20',

    defaults: {
        margin: '0 0 10 0'
    },

    items: [
        {
            xtype: 'label',
            style: 'font-size: 1.2em',
            bind: {
                html: '<b>{record.name}<b>'
            }
        },
        {
            xtype: 'image',
            bind: {
                src: '{record.photo}'
            },
            height: '200px'
        },
        {
            xtype: 'label',
            bind: {
                html: '<b>住所:</b><br> {record.address}'
            }
        },
        {
            xtype: 'component',
            style: 'width: 550px',
            tpl: [
                '<b>コメント:</b><br>',
                '<tpl for=".">',
                '「{.}」<br>',
                '</tpl>'
            ].join(''),
            bind: {
                data: '{record.comments}'
            }
        },
        {
            xtype: 'label',
            margin: '10 0',
            bind: {
                html: '<a href="{record.url}" target="_blank"><i class="fa fa-external-link"></i> 店舗ページへ</a>'
            }
        }
    ]
});