/**
 * Created by kawanoshinobu on 2016/06/02.
 */
Ext.define('FindCafe.view.setting.View', {
    extend: 'Ext.Container',

    xtype: 'setting-view',

    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Text',
        'Ext.form.Panel'
    ],

    layout: 'fit',

    items: [
        {
            xtype: 'titlebar',
            title: '<i class="fa fa-cog"></i> 設定',
            cls: 'header',
            docked: 'top'
        },
        {
            xtype: 'formpanel',
            padding: '20',
            items: [
                {
                    xtype: 'textfield',
                    label: 'ユーザー名',
                    labelAlign: 'top',
                    value: '煎茶 太郎'
                },
                {
                    xtype: 'textfield',
                    label: '地域',
                    labelAlign: 'top',
                    value: '東京'
                },
                {
                    xtype: 'checkboxfield',
                    label: '位置の利用',
                    labelAlign: 'top',
                    name: 'hoge',
                    checked: true
                },
                {
                    xtype: 'button',
                    text: '保存',
                    ui: 'action',
                    margin: '20 0 0 0'
                }
                //{
                //    xtype: 'button',
                //    text: 'キャンセル',
                //    ui: 'decline',
                //    margin: '20 0 0 0'
                //}
            ]
        }
    ]

    //listeners: {
    //    painted: 'onAfterrender'
    //}
});