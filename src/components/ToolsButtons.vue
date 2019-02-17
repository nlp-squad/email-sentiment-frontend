<template>
   <div class="tools-container">
    <div class="tools-button" style="text-align: center" @click="gotostatistics" >
      <svg v-svg
        symbol="icon-stats-dots"
        size="0 0 128 128"
        role="presentation"
        class="tools-button-icon">
      </svg>
      <h4 class="tools-button-icon-text">Product Statistics Based On Twitter Sentiment</h4>
    </div>
    <div class="tools-button" style="text-align: center" @click="gotorealtimetweets">
      <svg v-svg
        symbol="icon-twitter"
        size="0 0 128 128"
        role="presentation"
        class="tools-button-icon">
      </svg>
      <h4 class="tools-button-icon-text">Realtime Tweets About A Product</h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotostatistics: function () {
      this.$router.push('statistics')
    },
    gotorealtimetweets: function () {
      this.$router.push('realtimetweets')
    }
  }
}
</script>

<style lang="scss" scoped>
 .tools {
  &-container {
      display: flex;
      margin: 10rem auto;
      justify-content: space-around;
  }
  &-button {
      background-color: #F5F5F5;
      padding: 1rem;
      border-radius: 1px;
      cursor: pointer;

      &-icon {
      fill: #039BE5;
      padding: .5rem;

      &-text {
        font-size: 1.5rem;
        padding: .5rem;
      }
    }
  }

  &-button:hover .tools-button-icon {
      fill: #039B;
    }

}
</style>
