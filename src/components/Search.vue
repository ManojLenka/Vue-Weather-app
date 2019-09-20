<template>
<form novalidate @submit.prevent="searchWeather()">
    <div class='search-box'>
        <span class='search-icon'>
            <i class='fas fa-search'></i>
        </span>
        <input type="text" name='search' placeholder="City" v-model='city' autocomplete="off">
    </div>
</form>
</template>
<script>
import { Types } from './../store/types'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            city: ''
        }
    },
    computed: {
        ...mapGetters([
            'getDefaultCity'
        ])
    },
    methods: {
        searchWeather() {
            this.$router.push({ query: { city: this.city } })
        }
    },
    watch: {
        '$route.query.city': {
            immediate: true,
            handler() {
                this.city = this.$route.query.city
                let cityName = (this.$route.query.city) ? this.$route.query.city : this.getDefaultCity
                this.$store.dispatch(Types.GET_WEATHER_DATA, cityName)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .search-box {
        position: relative;
    }

    .search-icon {
        position: absolute;
        color: #3d3d3d;
        line-height: 2.3em;
        left: 0.5em;
        pointer-events: none;
    }

    .search-box>input {
        border-radius: 2em;
        border: 0;
        padding: 8px 8px 8px 30px;
        width: 300px;
        outline: none;
    }
</style>
