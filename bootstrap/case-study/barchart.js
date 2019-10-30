var ctx = document.getElementById('annual-chart').getContext('2d');
var annualData = [
    {
        "2016": {
            sales: 1000.99,
            expences: 900.50
        },
        "2017": {
            sales: 995.50,
            expences: 900.9
        },
        "2018": {
            sales: 998.9,
            expences: 990
        },
        "2019": {
            sales: 850,
            expences: 800
        }
    }
];

var data = {
    datasets: [],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: []
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: Chart.defaults.bar
});