Ext.define('FindCafe.model.Venue', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Ajax'
    ],

    proxy: {
        type: 'ajax',
        url: 'https://foursqare-api-2016.herokuapp.com/api',
        extraParams: {
            ll: '35.6894875,139.69170639999993'
        }
    },

    fields: [
        {
            name: 'name'
        },
        {
            name: 'address',
            convert: function (data) {
                return data[0];
            },
            mapping: 'location.formattedAddress'
        },
        {
            name: 'latitude',
            mapping: 'location.lat'
        },
        {
            name: 'longitude',
            mapping: 'location.lng'
        }
    ]

});