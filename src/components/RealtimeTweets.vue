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
    <input v-model="query" class="chart-search-bar-input" type="text" name="search-criteria" id="" placeholder="Name of Product e.g. Samsung S6 Edge">
    <button @click="search" class="chart-search-bar-button"> Look Up Statistics </button>
  </div>
  <div class="tweet-container">
    <div v-for="(i,k) in 50" :key="k" class="tweet">
      <div class="tweet-image-container">
        <img class="tweet-image" src="./../assets/logo.png" alt="">
      </div>
      <div class="tweet-body">
        <p> {{i}} I love going to the OK branch in Belvedere </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tweet {
    border-radius: 15px 50px 30px;
    border: .05rem solid #E0E0E0;
    display: flex;
    padding: .5rem 2rem 1rem;
    background-color: #E0E0E0;
    font-size: 1.5rem;

    &-body {
      padding: 1rem;
    }

    &-image {
      height: 5rem;

      &-container {
        // width: 5rem;
        overflow: hidden;
        border-radius: 100%;
        background-color: #fff;
      }
    }

    &-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0 auto;
      justify-items: flex-end;
      width: 70%;
    }
  }
  .tweet:not(:last-child) {
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
