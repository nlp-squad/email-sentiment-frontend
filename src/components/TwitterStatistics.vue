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
    <div v-if="loading" class="center">
      <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <span class="loader-text">
          Fetching And Analysing Data
        </span>
      </div>
    </div>
    <div v-if="nothingfound" class="center">
      <svg v-svg
        symbol="icon-file-empty"
        size="0 0 128 128"
        role="presentation"
        class="empty">
      </svg>
      <div>
        <span class="loader-text">
          Nothing Found On That Topic
        </span>
      </div>
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
      nothingfound: false,
      loading: false,
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
      this.loading = true
      this.showchart = false
      this.nothingfound = false
      var data = {
        query: this.query,
        count: 100000
      }
      axios.post('http://localhost:4000/twittersentiment', data).then((response) => {
        if (response.data.message) {
          this.nothingfound = true
          this.loading = false
        } else {
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
          this.loading = false
        }
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
  .nothingfound {
    margin: 5rem auto;
  }
  .empty {
    fill: #039BE5;
  }
  .center {
    position: absolute;
    left: 40%;
    text-align: center
  }
  .loader-text {
    font-size: 2rem;
  }
  .chart {
    position: relative;
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

  .lds-default {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-default div {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #039BE5;
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 29px;
  left: 53px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 18px;
  left: 50px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 9px;
  left: 41px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 6px;
  left: 29px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 9px;
  left: 18px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 18px;
  left: 9px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 29px;
  left: 6px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 41px;
  left: 9px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 50px;
  left: 18px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 53px;
  left: 29px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 50px;
  left: 41px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 41px;
  left: 50px;
}
@keyframes lds-default {
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

</style>
