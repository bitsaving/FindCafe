/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.search.Window', {
    extend: 'Ext.window.Window',

    xtype: 'venuewindow',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.Fit'
    ],

    title: '店舗詳細',

    glyph: 'xf0f4@FontAwesome',

    width: '670px',
    height: '90%',
    modal: true,

    layout: 'fit',
    cls: 'venue-window',

    items: [
        {
            xtype: 'container',
            margin: 20,
            padding: '0 10',
            cls: 'detail-container',
            scrollable: 'vertical',
            height: '100%',
            items: [
                {
                    xtype: 'label',
                    bind: {
                        html: '<h2 class="caption">{record.name}</h2>'
                    }
                },
                {
                    xtype: 'component',
                    style: 'width: 630px',
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
                        html: '<h3 class="caption">住所</h3> {record.address}'
                    }
                },
                {
                    xtype: 'component',
                    style: 'width: 600px',
                    tpl: [
                        '<h3 class="caption">みんなのコメント</i></h3>',
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
                    }
                }
            ]
        }
    ]
});