var ctx = document.getElementById('cusom-chart').getContext('2d');
console.log(ctx);
var data = {
    datasets: [{
        data: [100.0, 250.99, (250.99 - 100.0)],
        backgroundColor: ['Red', 'Black', 'Green'],
        hoverBackgroundColor: ['Red', 'Black', 'Green']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Expences',
        'Sales',
        'Differences'
    ]
};
new Chart(ctx, {
    type: 'pie',
    data: data,
    options: Chart.defaults.pie
});