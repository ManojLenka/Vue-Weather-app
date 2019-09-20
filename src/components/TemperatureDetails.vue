<template>
        
<section class='remaining-width pr-2'>
    <div class='display-flex space-between'>
        <div class='info-content p-l-r'>SUNRISE {{ getSunriseSunset.sunrise }}</div>
        <div class='info-content p-l-r'>SUNSET {{ getSunriseSunset.sunset }}</div>
    </div>
    <div class='info-content display-flex space-around mt-1 p-1'>
        <div class='display-flex align-vertical'>
            <div class='disc-data fw-600 display-flex align-vertical'>{{ getHumidity }}%</div>
            <div class='pt-h5'>Humidity</div>
        </div>
        <div class="display-flex align-vertical">
            <div class='disc-data fw-600 display-flex align-vertical'><div>{{ getWindSpeed }}</div><div>m/s</div></div>
            <div class='pt-h5'>Max. Wind</div>
        </div>
        <div class='display-flex align-vertical'>
            <div class='disc-data fw-600 display-flex align-vertical'><div>{{ getPressure }}</div><div>kPa</div></div>
            <div class='pt-h5'>Pressure</div>
        </div>
    </div>
    <div class='pt-1 fw-600'>
        TEMPERATURE
    </div>
    <temperatureGraph></temperatureGraph>
    <div class='display-flex space-between pt-1'>
        <div class='info-content p-l-r'>MIN {{ getMaxMinTemp.tempMin }}<span>&deg;</span></div>
        <div class='info-content p-l-r'>MAX {{ getMaxMinTemp.tempMax }}<span>&deg;</span></div>
    </div>
</section>
</template>

<script>
import temperatureGraph from "./TemperatureGraph"
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getMaxMinTemp',
            'getSunriseSunset',
            'getHumidity',
            'getPressure',
            'getWindSpeed'
        ])
    },
    components: {
        temperatureGraph
    }
}
</script>

<style scoped>
.remaining-width {
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1 100%;
}

.info-content {
    background-color: rgba(162, 182, 187, 0.2);
    border-radius: 0.9rem;
}

.disc-data {
    border: 2px solid rgba(255, 255, 255, 0.9);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    text-align: center;
}
</style>