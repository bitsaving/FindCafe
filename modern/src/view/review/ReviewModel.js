/**
 * Created by kawanoshinobu on 2016/04/28.
 */
Ext.define('FindCafe.view.review.ReviewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.review',

    stores: {
        mychart: {
            source: 'venues',
            sorters: [{
                property: 'ratingSignals',
                direction: 'asc'
            }]
        }
    }

});