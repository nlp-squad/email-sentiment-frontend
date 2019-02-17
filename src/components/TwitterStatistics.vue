<template>
  <div class="chart">
    <div class="chart-search-bar">
      <button @click="back" class="chart-search-bar-button-back">
        <svg v-svg
              symbol="icon-arrow-left2"
              size="0 0 24 24"
              role="presentation"
              class="icon">
        </svg>
      </button>
      <input v-model="query" class="chart-search-bar-input" type="text" name="search-criteria" id="" placeholder="Name of Product e.g. Samsung S6 Edge">
      <button @click="search" class="chart-search-bar-button"> Look Up Statistics </button>
    </div>
    <div v-if="showchart" class="chart-area">
      <chart v-if="showchart" :chart-data="chartdata" :options="options"></chart>
    </div>
  </div>
</template>

<script>
import chart from './chart'
import axios from 'axios'

export default {
  components: {
    chart
  },
  data () {
    return {
      showchart: false,
      positive: 0,
      negative: 0,
      neutral: 0,
      query: '',
      chartdata: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        pieceLabel: {
          mode: 'percentage',
          precision: 1
        }
      }
    }
  },
  methods: {
    search () {
      console.log('Searching')
      var data = {
        query: this.query,
        count: 100000
      }
      axios.post('http://localhost:4000/twittersentiment', data).then((response) => {
        this.positive = response.data.positiveTweets.percentage
        this.negative = response.data.negativeTweets.percentage
        this.neutral = response.data.neutralTweets.percentage
        this.chartdata = {
          labels: ['Positive', 'Negative', 'Neutral'],
          datasets: [
            {
              label: 'Twitter Data',
              backgroundColor: ['#43A047', '#E53935', '#6D4C41'],
              data: [this.positive, this.negative, this.neutral]
            }
          ]
        }
        this.showchart = true
      }).catch((err) => {
        console.log(err)
      })
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart {
    &-search-bar {
      background-color: #faf9f9;
      padding: 0 1rem;
      padding-bottom: .5rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;

      &-input {
        width: 70%;
        border-radius: 1.5rem 5rem 3rem;
        border: .05rem solid #039BE5;
        padding: 1rem ;
        height:  2rem
      }

      &-button {
        border-radius: 15px 50px 30px;
        border: .05rem solid #039BE5;
        padding: 1rem;
        transition: all .2s;

        &-back {
          border: none;
          background-color: inherit;
          vertical-align: middle;
          transition: all .2s;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        &-back:hover {
          background-color: #E0E0E0;
          cursor: pointer;
        }
      }

      &-button:hover {
        background-color: #039BE5;
        cursor: pointer
      }
    }
    &-area {
      width: 60rem;
      margin: 0 auto;
      background-color: #faf9f9;
      padding: 2rem;
    }
  }
</style>
