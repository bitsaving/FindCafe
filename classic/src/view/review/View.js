/**
 * Created by kawanoshinobu on 2016/04/30.
 */
Ext.define('FindCafe.view.review.View', {
    extend: 'Ext.Panel',
    xtype: 'review-view',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Numeric3D',
        'Ext.chart.interactions.CrossZoom',
        'Ext.chart.series.Bar3D',
        'Ext.layout.container.Fit',
        'FindCafe.view.review.ReviewModel'
    ],

    layout: 'fit',
    frame: true,
    viewModel: 'review',

    title: '評価',
    glyph: 'xf0c0@FontAwesome',

    items: {
        xtype: 'cartesian',
        bind: {
            store: '{reviews}'
        },
        insetPadding: '40 40 40 20',
        animation: Ext.isIE8 ? false : {
            easing: 'backOut',
            duration: 500
        },
        colors: ['#8BC34A'],
        interactions: {
            type: 'crosszoom'
            //zoomOnPanGesture: true
        },
        axes: [{
            type: 'numeric3d',
            position: 'left',
            fields: 'rating',
            minimum: 5,
            //maximum: 1,
            //majorTickSteps: 1,
            label: {
                textAlign: 'right'
            },
            //renderer: 'onAxisLabelRender',
            title: 'レビュー件数',
            grid: {
                odd: {
                    fillStyle: 'rgba(255, 255, 255, 0.06)'
                },
                even: {
                    fillStyle: 'rgba(0, 0, 0, 0.03)'
                }
            }
        }, {
            type: 'category3d',
            position: 'bottom',
            fields: 'name',
            grid: true
        }],
        series: [{
            type: 'bar3d',
            xField: 'name',
            yField: 'rating',
            style: {
                minGapWidth: 20
            },
            highlightCfg: {
                saturationFactor: 1.5
            },
            label: {
                field: 'ratingSignals',
                display: 'insideEnd'
                //renderer: 'onSeriesLabelRender'
            },
            tooltip: {
                trackMouse: true,
                renderer: function (tooltip, record) {
                    tooltip.setHtml(record.get('name'));
                }
            }
        }]
    }

});