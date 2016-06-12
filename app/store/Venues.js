Ext.define('FindCafe.store.Venues', {
    extend: 'Ext.data.Store',

    alias: 'store.venues',
    storeId: 'venues',

    requires: [
        'FindCafe.model.Venue'
    ],

    model: 'FindCafe.model.Venue',

    autoLoad: true,

    sorters: [
        {
            property: 'rating',
            direction: 'DESC'
        }
    ]

});