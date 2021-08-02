<template>
    <section>
        <h1 class="h3 font-weight-bold">Google Charts</h1>
        <div class="container">
            <div class="row">

                <div class="card-columns">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Geo Chart</h5>
                            <div class="chart-size">
                                <GChart :settings="{ 'packages':['geochart'] }" type="GeoChart" :data="GeoChartData"
                                    :options="GeoChartOptions" />
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Column Chart</h5>
                            <GChart type="ColumnChart" :data="ColumnChartData" :options="ColumnChartOptions" />
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Pie Chart</h5>
                            <GChart :settings="{ 'packages':['corechart'] }" type="PieChart" :data="CoreChartData"
                                :options="CoreChartOptions" />
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Line Chart</h5>
                            <GChart :settings="{ 'packages':['corechart'] }" type="LineChart" :data="LineChartData"
                                :options="LineChartOptions" />
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Combo Chart</h5>
                            <GChart :settings="{ 'packages':['corechart'] }" type="ComboChart" :data="ComboChartData"
                                :options="ComboChartOptions" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {
        GChart
    } from 'vue-google-charts'
    export default {
        data() {
            return {
                // GeoChart
                GeoChartData: [
                    ['Country', 'Popularity'],
                    ['Germany', 200],
                    ['United States', 300],
                    ['Brazil', 400],
                    ['Canada', 500],
                    ['France', 600],
                    ['RU', 700]
                ],
                GeoChartOptions: {},

                // ColumnChar
                ColumnChartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
                ColumnChartOptions: {
                    chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    }
                },

                // CoreChart
                CoreChartData: [
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7]
                ],
                CoreChartOptions: {},

                // LineChart
                LineChartData: [
                    ['Year', 'Sales', 'Expenses'],
                    ['2004', 1000, 400],
                    ['2005', 1170, 460],
                    ['2006', 660, 1120],
                    ['2007', 1030, 540]
                ],
                LineChartOptions: {
                    hAxis: {
                        title: 'Time'
                    },
                    vAxis: {
                        title: 'Popularity'
                    },
                },
                // LineChart
                ComboChartData: [
                    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                    ['2004/05', 165, 938, 522, 998, 450, 614.6],
                    ['2005/06', 135, 1120, 599, 1268, 288, 682],
                    ['2006/07', 157, 1167, 587, 807, 397, 623],
                    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                    ['2008/09', 136, 691, 629, 1026, 366, 569.6]
                ],
                ComboChartOptions: {
                    title: 'Monthly Coffee Production by Country',
                    vAxis: {
                        title: 'Cups'
                    },
                    hAxis: {
                        title: 'Month'
                    },
                    seriesType: 'bars',
                    series: {
                        5: {
                            type: 'line'
                        }
                    }

                },
            }
        },
        metaInfo: {
            title: 'Dashboard'
        },
        components: {
            GChart
        }

    }
</script>

<style>
    body {
        background: #f5f5f5 !important
    }
</style>

<style scoped>
    @media (max-width: 575px) {
        .card-body {
            max-width: calc(100vw - 40px);
            min-width: calc(100vw - 40px);
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 2
        }

        .card-body {
            min-width: calc(992px / 2 - 30px);
        }
    }
</style>