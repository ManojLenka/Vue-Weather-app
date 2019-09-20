<template>
    <div class='display-flex space-around info-content p-1 mt-1'>
        <graphStick v-for="temperature in getForecastWeather" :key="temperature.dt" :temperature="temperature"></graphStick>
    </div>
</template>

<script>
import graphStick from "./GraphStick"
import { mapGetters } from 'vuex'

export default {
    components: {
        graphStick
    },
    computed: {
        ...mapGetters([
            'getForecastWeather'
        ])
    },
    data: function() {
        return {
            graphDetails: [
                {
                    time: "10 AM",
                    temperature: 27,
                    isActive: false
                },
                {
                    time: "12 PM",
                    temperature: 27,
                    isActive: false
                },
                {
                    time: "2 PM",
                    temperature: 32,
                    isActive: true
                },
                {
                    time: "4 PM",
                    temperature: 27,
                    isActive: false
                },
                {
                    time: "6 PM",
                    temperature: 27,
                    isActive: false
                },
                {
                    time: "8 PM",
                    temperature: 27,
                    isActive: false
                },
                {
                    time: "10 PM",
                    temperature: 27,
                    isActive: false
                }
            ]
        }
    }
}
</script>
