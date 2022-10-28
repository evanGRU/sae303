import dataJson from './data.json' assert { type: 'json' }



const myChart1 = new Chart(
    document.getElementById('myChart1'), {
        type: 'line',
        data: {
            labels: [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',

            ],

            datasets: [{
                label: 'Chiffres d\'affaires mensuels pour 2021 €',
                backgroundColor: ['#9584FB', '##000000', '##000000', '##000000', '##000000', '##000000', '##000000'],
                borderColor: ['#574FAB'],
                data: dataJson.dataset3,

            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#fff',
                        font: {
                            size: 20,
                        }
                    }
                }
            }
        },
    }

)

const myChart2 = new Chart(
    document.getElementById('myChart2'), {
        type: 'bar',
        data: {
            labels: [
                'CUISINE',
                'ELECTROMÉNAGER',
                'IMAGE-SON',
                'INFORMATIQUE',
                'TELEPHONIE',

            ],


            datasets: [{
                label: 'Chiffres d\'affaires par catégorie d\'article',
                backgroundColor: ['#574FAB'],
                data: dataJson.dataset2,

            }]
        },
        options: {}
    }

)


const myChart3 = new Chart(
    document.getElementById('myChart3'), {
        type: 'pie',
        data: {
            labels: [
                'Non',
                'Oui',
            ],




            datasets: [{
                label: 'Pourcentage d\'utilisation des coupons de réductions',
                backgroundColor: ['#574FAB', '#7e68c6'],
                borderColor: ['#c0b1e3'],
                data: dataJson.dataset4,

            }]
        },
        options: {}
    }

)















const myChart = new Chart(
    document.getElementById('graph'), {
        type: 'line',
        data: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            datasets: [{
                backgroundColor: ['#574FAB'],
                borderColor: ['#574FAB'],
                label: 'Retrait sur place',
                data: [36, 28, 35, 30, 33, 41, 32, 38, 30, 41, 29, 31],
                
            }]
        },
        options: {
            scales: {
                y: {
                    min: 10,
                    max: 50
                }
            }
        }

    }
);

document.querySelectorAll('input[type=checkbox]').forEach((e) => {
    e.addEventListener('click', (el) => {
        console.log('check')
        if (el.target.checked) {
            let val = el.currentTarget.dataset.value.substring(1, el.currentTarget.dataset.value.length - 1).split(', ');
            let obj = {
                label: el.currentTarget.dataset.label,
                data: val,
                fill: false,
                backgroundColor: el.currentTarget.dataset.color,
                borderColor: el.currentTarget.dataset.color,
            }
            myChart.data.datasets.push(obj);
            myChart.update()
        } else {
            myChart.data.datasets = myChart.data.datasets.filter((e) => e.label !== el.currentTarget.dataset.label)
            myChart.update()
        }
    })
})

const myChart6 = new Chart(
    document.getElementById('myChart6'),
    {
    type: 'doughnut',
    data: {
      labels: [
        'Cuisine',
        'Electroménager',
        'Image-son',
        'Informatique',
        'Téléphonie',


      ],

    datasets: [{
        label: 'Taux de marge net en %',
        backgroundColor: ['#8077B6', '#A09ECA', '#BABADA', '#3F007D', '#572D92'],
        borderColor: ['transparent'],
        data: dataJson.dataset5,

      }]
    },
    options: {}
  }

  )



var options = {
    series: [{
        name: 'Free Cash Flow',
        data: [6978.71, 6820.29, 7965.09, 1788.38, 13432.75]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Cuisine', 'Eléctroménager', 'Image-son', 'Informatique', 'Téléphonie'],
        labels:{
            style: {
                colors: ['#fff', '#fff','#fff','#fff','#fff'],
            },
        } 
    },
    yaxis: {
        labels:{
            style: {
                colors: ['#fff', '#fff','#fff','#fff','#fff'],
            },
        } 
    },
    fill: {
        opacity: 1,
        colors: ['#574FAB']
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();