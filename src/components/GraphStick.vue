<template>
    <div class="display-flex align-vertical transparent-btn" :class="{'active-temp': getSelectedDate === temperature.dt}" @click='selectDate($event)'>
        <div class='circle display-flex justify-align-center'>{{ getTemperature }}<span>&deg;</span></div>
        <div class='info-progress mb-1'>
            <div class="status-progress-bar"
                :style="{ height: ((getTemperatureInC === '-') ? '' : getTemperatureInC + 50) + '%'}">
            </div>
        </div>
        <div>{{ getDayName }}</div>
    </div>
</template>

<script>
import { formatTempKtoC, formatTempKtoF, getDay } from './../utility'
import { mapGetters } from 'vuex'
import { Types } from './../store/types'

export default {
    props: ["temperature"],
    computed: {
        ...mapGetters([
            'getTempUnit',
            'getSelectedDate'
        ]),
        getTemperature() {
            const temp = (this.temperature.main && this.temperature.main.temp) ? this.temperature.main.temp : 0
            return (this.getTempUnit === 'C')
                ? formatTempKtoC(temp) : formatTempKtoF(temp)
        },
        getTemperatureInC() {
            const temp = (this.temperature.main && this.temperature.main.temp) ? this.temperature.main.temp : '-'
            return (temp === '-') ? '-' : formatTempKtoC(temp)
        },
        getDayName() {
            return getDay(new Date(this.temperature.dt * 1000)).slice(0, 3)
        }
    },
    methods: {
        selectDate(ev) {
            ev.stopPropagation()
            this.$store.commit(Types.SET_SELECTED_DATE, this.temperature.dt)
            this.$store.commit(Types.GET_WEATHER_DATA_SUCCESS, this.temperature)
        }
    }
}
</script>

<style scoped>
.info-progress {
    position: relative;
    height: 200px;
    transform: rotate(180deg);
}

.info-progress:before {
    content: '';
    display: inline-block;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 2px;
    left: 3px;
}

.status-progress-bar {
    width: 8px;
    border-radius: 8px;
    background-color: rgba(0, 32, 51, 1);
}

.circle {
    border: 1px solid transparent;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
}

.active-temp .circle {
    background-color: rgba(255, 255, 255, 0.9);
    color: rgba(0, 32, 51, 1);
    border: 1px solid rgba(255, 255, 255, 0.9);
    font-size: 1.1em;
    font-weight: 600;
}

.active-temp .info-progress::before, .active-temp .status-progress-bar {
    background-color: rgba(237, 239, 239, 1);
}
</style>
