<template>
<div>
  <div class="chart-search-bar">
    <button @click="back" class="chart-search-bar-button-back">
      <svg v-svg
            symbol="icon-arrow-left2"
            size="0 0 24 24"
            role="presentation"
            class="icon">
      </svg>
    </button>
    <input v-model="tweetString" class="chart-search-bar-input" type="text" name="search-criteria" id="" placeholder="Name of Product e.g. Samsung S6 Edge">
    <button @click="trackTweets" class="chart-search-bar-button"> Look Up Statistics </button>
  </div>
  <div class="tweet-container">
    <div v-for="(tweet,k) in tweets" :key="k" class="tweet">
      <img class="tweet-image" :src="tweet.picture" alt="user-profile">
      <div class="tweet-body">
        <p class="tweet-body-name"> {{`${tweet.screenName}:`}}  </p>
        <!-- <p class="tweet-body-text"> {{tweet.text}} </p> -->
        <div class="tweet-body-text" v-html="tweet.text"></div>
        <div class="tweet-tags">
          <span style="float: left" class="positive" v-if="tweet.Class === 'positive'"> Positive </span>
          <span  style="float: left" class="negative" v-else-if="tweet.Class === 'positive'" > Negative </span>
          <span  style="float: left" class="neutral" v-else> Neutral </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// import Vue from 'vue'
// import VueSocket from 'vue-socket.io'
// Vue.use(VueSocket, 'http://127.0.0.1:40')

export default {
  data () {
    return {
      tweetString: '',
      tweets: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    trackTweets () {
      var data = {
        tweetString: this.tweetString
      }
      console.log(data)
      this.$socket.emit('trackthis', data)
    }
  },
  sockets: {
    newtweet: function (data) {
      this.tweets.push(data)
      console.log(data.Class)
    }
  }
}
</script>

<style lang="scss" scoped>
  .positive {
    background-color: #43A047;
    color: #f3f3f3;
    padding: 0.5rem;
    border-radius: 10%;
  }

  .negative {
    background-color: #E53935;
    color: #f3f3f3;
    padding: 0.5rem;
    border-radius: 10%;
  }

  .neutral {
    background-color: rgb(113, 116, 255);
    color: #f3f3f3;
    padding: 0.5rem;
    border-radius: 10%;
  }

  .tweet {
    border-radius: 15px 50px 30px;
    border: .05rem solid #E0E0E0;
    display: flex;
    padding: .5rem 2rem 1rem;
    background-color: #E0E0E0;
    font-size: 1.5rem;

    &-tags {
      display: flex;
      flex-direction: row-reverse;
    }
    &-body {
      padding: 1rem;

      &-name {
        color: #42A5F5;
        font-weight: bold;
      }

      &-text {

      }
    }

    &-image {
      height: 5rem;
       border-radius: 100%;
      &-container {
        width: 10rem;
        overflow: hidden;
        background-color: #fff;
      }
    }

    &-container {
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      margin: 0 auto;
      justify-items: flex-end;
      width: 70%;
    }
  }
  .tweet {
    margin-bottom: 2rem;
  }

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
}
</style>
