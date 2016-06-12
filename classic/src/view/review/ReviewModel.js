/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.review.ReviewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.review',

    stores: {
        reviews: {
            source: 'venues',
            sorters: [{
                property: 'rating',
                direction: 'asc'
            }]
        }
    }

});