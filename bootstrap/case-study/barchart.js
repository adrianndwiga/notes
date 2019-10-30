var ctx = document.getElementById('annual-chart').getContext('2d');
var annualData = [
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
];

annualData.map()

var data = {
    datasets: [{
            label: 'Sales',
            data: annualData.map(d => d.sales)
        },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: annualData.map(d => d.label)
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: Chart.defaults.bar
});