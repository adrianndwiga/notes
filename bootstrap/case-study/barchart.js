function loadBarChartData(canvasId, dataType) {
    var _ = { annualData: [
        {
            label: 2016,
            sales: 1000.99,
            expences: 900.50
        },
        {
            label: 2017,
            sales: 995.50,
            expences: 900.9
        },
        {
            label: 2018,
            sales: 998.9,
            expences: 990
        },
        {
            label: 2019,
            sales: 850,
            expences: 800
        }
    ],
    monthlyData:  [
        {
            label: 'Jan 2019',
            sales: 85,
            expences: 90
        },
        {
            label: 'Feb 2019',
            sales: 84,
            expences: 89
        },
        {
            label: 'Mar 2019',
            sales: 80,
            expences: 0
        },
        {
            label: 'Apr 2019',
            sales: 85,
            expences: 90
        },
        {
            label: 'May 2019',
            sales: 85,
            expences: 90
        },
        {
            label: 'Jun 2019',
            sales: 85,
            expences: 90
        },
        {
            label: 'Jul 2019',
            sales: 85,
            expences: 90
        },
        ,
        {
            label: 'Aug 2019',
            sales: 85,
            expences: 90
        }
    
    ]};

    var _data = _[dataType];

    var ctx = document.getElementById(canvasId).getContext('2d');

    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
    
    var color = Chart.helpers.color;
    
    var data = {
        datasets: [{
                label: 'Sales',
                backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: _data.map(d => d.sales)
            }, 
            {
                label: 'Expences',
                backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: _data.map(d => d.expences)
            },
        ],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: _data.map(d => d.label)
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: Chart.defaults.bar
    });
}


