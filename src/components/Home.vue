<template>
  <div class="weather-app" :style="{ backgroundImage: `url(${require(`../assets/${getImageName}.jpg`)})` }">
    <div class="cover-screen overlay display-flex">
      <div class="left-container">
        <search></search>
        <temperature></temperature>
      </div>
      <div class="display-flex right-container p-2 base-text-color direction-column f-12">
        <header class='pb-2 display-flex space-between fw-600'>
            <div>DAY DETAILS</div>
            <div class='day-details pr-3'>
                <span>{{ getDay }}</span>
                <span>{{ getDate }} {{ getMonth }}</span>
            </div>
        </header>
        <temperatureDetails></temperatureDetails>
        <footer class='pt-2 pb-1'>
            Data brought to you by <a href="https://openweathermap.org/current" target="_blank">openweathermap.org</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import search from "./Search"
import temperature from "./Temperature"
import temperatureDetails from "./TemperatureDetails"
import { ApiEndpoints } from "../constants/api-endpoints"
import { Types } from './../store/types'
import { getDay, getMonth, getImageName } from './../utility/index'

export default {
data() {
return {
  date: new Date(),
};
},
components: {
  search,
  temperature,
  temperatureDetails
},
computed: {
  getDay() {
    return getDay(this.date)
  },
  getMonth() {
    return getMonth(this.date)
  },
  getDate() {
    return this.date.getDate()
  },
  getImageName() {
    return getImageName(this.$store.getters.getTempId)
  }
}
}
</script>

<style lang="scss" scoped>
  .weather-app {
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .left-container {
    color: rgba(255, 255, 255, 0.9);
    flex-basis: 70%;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-container {
    background-color: rgba(0, 0, 0, 0.3);
    overflow-x: hidden;
    overflow-y: auto;
    flex-basis: 30%;
  }

</style>
