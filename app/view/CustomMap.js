Ext.define('FindCafe.view.CustomMap', {
    extend: 'Ext.Component',

    xtype: 'custom-map',

    requires: [
        'Ext.data.StoreManager'
    ],

    config: {
        store: null,
        markers: [],
        location: null
    },

    onRender: function () {
        var me = this;
        me.callParent(arguments);

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            address: '東京'
        }, function (result, status) {
            if (status === 'OK') {
                var latLng = result[0].geometry.location;
                me.setLocation({
                    latitude: latLng.lat(),
                    longitude: latLng.lng()
                });
            }
        });
    },

    updateStore: function (store) {
        var me = this;

        if (Ext.isEmpty(store)) {
            return;
        }
        else if (Ext.isObject(store) && store.type) {
            store = Ext.data.StoreManager.lookup(store);
        }

        store.on('datachanged', function (store) {
            me._createMarkers(store)
        });

        store.on('load', function (store) {
            me._createMarkers(store)
        });

        me._createMarkers(store);
    },

    updateLocation: function (location) {
        var me = this;

        if (!location) {
            return;
        }

        //var p = this.getLocation();
        me.map = me.map || new google.maps.Map(this.el.dom, {
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        me.map.panTo({
            lat: location.latitude,
            lng: location.longitude
        });

        // Redraw the map when resize the window
        google.maps.event.addDomListener(window, 'resize', function () {
            Ext.defer(me.redraw, 500, me);
        });

        me._renderMarkers();
    },

    redraw: function () {
        if (this.map) {
            google.maps.event.trigger(this.map, 'resize');
        }
    },

    _createMarkers: function (store) {
        //var me = this;
        //Ext.each(me.getMarkers(), function (marker) {
        //    marker.setMap(null);
        //});

        var markers = [];

        store.each(function (venue) {
            var ll = new google.maps.LatLng(venue.get('latitude'), venue.get('longitude'));
            var marker = new google.maps.Marker({
                position: ll,
                title: venue.get('name'),
                icon: 'resources/images/red-dot.png'
            });

            var infoWindow = new google.maps.InfoWindow({
                content: venue.get('name')
            });

            google.maps.event.addListener(marker, "click", function () {
                infoWindow.open(this.map, marker);
                //me.fireEvent('select', me, business);
                //me.setSelection(business);
            });

            markers.push(marker);
        });

        this.setMarkers(markers);
    },

    _renderMarkers: function () {
        var me = this;
        Ext.Array.forEach(this.getMarkers(), function (marker) {
            marker.setMap(me.map);
        });
    }

});