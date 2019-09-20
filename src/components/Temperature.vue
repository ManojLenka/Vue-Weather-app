<template>
    <div class='display-flex direction-column'>
        <div class='display-flex space-between'>
            <div class='align-end'>
                <span class='font-6 inline-block'>
                    {{ getTemp }}<span>&deg;</span>
                </span>
                <span class='font-2'>
                    {{ getTempDescr }}
                </span>
            </div>
            <div class='display-flex align-vertical justify-end'>
                <span>
                    <button class='transparent-btn base-text-color' :class='{ "active": getTempUnit === "C" }' @click='changeTempUnit("C")'>Celcius</button> |
                    <button class='transparent-btn base-text-color' :class='{ "active": getTempUnit === "F" }' @click='changeTempUnit("F")'>Fahrenheit</button>
                </span>
                <span class='cloud-data'>
                    <i class='fas fa-cloud'></i>
                </span>
            </div>
        </div>
        <hr>
        <div class='display-flex space-between pt-2 f-12 fw-600'>
            <div>
                {{ getCityName }}
            </div>
            <div class='day-details'>
                <span>{{ getDay }}</span>
                <span>{{ getDate }} {{ getMonth }} {{ getYear }}</span>
                <span>{{ getTime }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Types } from './../store/types'
import { formatAMPM, getDay, getMonth } from './../utility/index'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            date: new Date(),
        }
    },
    computed: {
        getDay() {
            return getDay(this.date)
        },
        getMonth() {
            return getMonth(this.date)
        },
        getTime() {
            return formatAMPM(this.date)
        },
        getDate() {
            return this.date.getDate()
        },
        getYear() {
            return this.date.getFullYear()
        },
        ...mapGetters([
            'getTempUnit',
            'getTemp',
            'getTempDescr',
            'getDefaultCity',
            'getCityName'
        ])
    },
    methods: {
        changeTempUnit(unit) {
            this.$store.commit(Types.CHANGE_TEMP_UNIT, unit)
        }
    }
}
</script>

<style scoped>
hr {
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
}

.cloud-data {
    color: rgba(255, 255, 255, 0.9);
    font-size: 4em;
}
</style>