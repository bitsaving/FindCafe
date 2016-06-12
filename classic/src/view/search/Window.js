/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.search.Window', {
    extend: 'Ext.window.Window',

    xtype: 'venuewindow',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox'
    ],

    title: '店舗詳細',

    width: '670px',
    height: '90%',
    modal: true,

    layout: 'fit',
    cls: 'venue-window',

    items: [
        {
            xtype: 'container',
            margin: 20,
            padding: 10,
            cls: 'detail-container',
            layout: 'vbox',
            defaults: {
                margin: '0 0 10 0'
            },
            items: [
                {
                    xtype: 'label',
                    style: 'font-size: 1.3em',
                    bind: {
                        html: '<b class="caption">{record.name}<b>'
                    }
                },
                {
                    xtype: 'component',
                    style: 'width: 630px',
                    margin: '10 0 20',
                    tpl: [
                        '<tpl for=".">',
                        '<img src="{.}"',
                        ' height="200px"',
                        ' style="box-shadow: #c7cdcf 0 1px 0 0;',
                        ' border-radius: 3px;',
                        ' margin-right: 3px;',
                        '"/>',
                        '</tpl>'
                    ].join(''),
                    bind: {
                        data: '{record.photos}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '<b class="caption">住所:</b><br> {record.address}'
                    }
                },
                {
                    xtype: 'component',
                    style: 'width: 600px',
                    tpl: [
                        '<b class="caption">コメント:</b><br>',
                        '<tpl for=".">',
                        '「{.}」<br><br>',
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
                        html: '{site_url}'
                        //html:
                    }
                }
            ]
        }
    ]
});