/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.setting.View', {
    extend: 'Ext.form.Panel',
    xtype: 'setting-view',

    requires: [
        'Ext.form.field.Checkbox'
    ],

    title: '設定',
    glyph: 'xf013@FontAwesome',

    frame: true,
    width: 400,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'ユーザー名',
        name: 'user',
        emptyText: 'user id',
        value: '煎茶 太郎'
    }, {
        allowBlank: false,
        fieldLabel: '地域（デフォルト）',
        name: 'place',
        emptyText: 'password',
        value: '東京'
    }, {
        xtype:'checkbox',
        fieldLabel: '位置情報の利用',
        name: 'remember',
        value: true
    }],

    buttons: [
        { text:'キャンセル' },
        { text:'保存' }
    ],

    initComponent: function() {
        this.defaults = {
            anchor: '100%',
            labelWidth: 180
        };

        this.callParent();
    }

});