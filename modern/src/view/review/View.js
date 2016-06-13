/**
 * Created by kawanoshinobu on 2016/06/02.
 */
Ext.define('FindCafe.view.review.View', {
    extend: 'Ext.Container',

    xtype: 'review-view',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Numeric3D',
        'Ext.chart.interactions.CrossZoom',
        'Ext.chart.series.Bar3D',
        'FindCafe.view.review.ReviewModel'
    ],

    viewModel: 'review',

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'titlebar',
            title: '<i class="fa fa-users"></i> 評価',
            cls: 'header',
            docked: 'top'
        },
        {
            xtype: 'cartesian',
            bind: {
                store: '{mychart}'
            },
            // insetPadding: '40 40 40 20',
            animation: Ext.isIE8 ? false : {
                easing: 'backOut',
                duration: 500
            },
            colors: ['#E91E63'],
            interactions: {
                type: 'crosszoom'
                //zoomOnPanGesture: true
            },
            axes: [{
                type: 'numeric3d',
                position: 'left',
                fields: 'ratingSignals',
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
                yField: 'ratingSignals',
                style: {
                    minGapWidth: 20
                },
                highlightCfg: {
                    saturationFactor: 1.5
                },
                label: {
                    field: 'rating',
                    display: 'insideEnd'
                    //renderer: 'onSeriesLabelRender'
                }
            }]
        }
    ]

});