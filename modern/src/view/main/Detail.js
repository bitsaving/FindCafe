/**
 * Created by kawanoshinobu on 2016/04/24.
 */
Ext.define('FindCafe.view.main.Detail', {
    extend: 'Ext.Container',

    xtype: 'detail',

    scrollable: true,

    width: '100%',

    layout: 'fit',
    cls: 'venue-window',

    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            cls: 'header',
            title: '店舗詳細',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-chevron-left',
                    ui: 'action',
                    listeners: {
                        tap: 'onTapBackButton'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            margin: 10,
            padding: '0 20',
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
                    style: 'width: 630px; margin: 20px 0;',
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
                        '"{.}"<br><br>',
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