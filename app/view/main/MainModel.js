/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('FindCafe.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'FINDCAFE'
    },

    formulas: {
        'site_url': function (get) {
            var record = get('record');
            if (record && record.get('url')) {
                return '<a href="' + record.get('url') + '" target="_blank" class="caption">' +
                    '<i class="fa fa-external-link"></i> 店舗ページへ</a><br><br>';
            }
            return null;
        }
    }

});
