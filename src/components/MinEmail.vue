<template>
  <div class="min-email">
    <div class="min-email-from"> {{ email.FromName }} </div>
    <div class="min-email-body">
      <span class="min-email-subject"> {{ email.Subject }} </span> -
      <span class="min-email-message"> {{ email.Message }} </span>
      <div class="min-email-labels">
        <span class="positive" v-if="email.Class === 'Positive'"> Positive </span>
        <span class="negative" v-else> Negative </span>
        <router-link :to="'/reademail/' +this.email.FromName+ '/' +this.email.FromAddress+ '/' +this.email.Subject+ '/' +this.email.Message+ '/' +this.email.Date+ '/' +this.email.Class"
          tag="button"
          class="min-email-reply"
          :email="email">
          <svg v-svg
          symbol="icon-reply"
          size="0 0 12 12"
          role="presentation"
          ></svg>
          <span class="min-email-reply-text" >Reply</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['email'],
  methods: {

  },
  computed: {
    link: function () {
      return `/reademail/${this.email.FromName}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .min-email{
    height: 7.5rem;
    padding: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &-labels {
      padding-top: .5rem;
      padding-bottom: .5rem;
      font-weight: bold;
    }

    &:not(:last-child) {
      border-bottom-style: solid;
      border-bottom-color: #BDBDBD;
      border-bottom-width: 1px;
    }

    &-body {
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-from {
      font-size: 2rem;
    }

    &-message {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-subject {
      font-weight: bold;
    }

    &-reply {
      float: right;
      outline: none;
      border: none;
      background: none;
      padding: 0.4rem;
      vertical-align:middle;
      border-width: 1px;
      border-style: solid;
      &:hover {
         border-radius: 5%;
         background-color: #616161;
         cursor: pointer;
      }

      &:active, &:visited {
        outline: none;
        border: none
      }

    }
  }

  .positive {
    background-color: #43A047;
    color: #f3f3f3;
    padding: 0.2rem;
    border-radius: 5%;
  }

  .negative {
    background-color: #E53935;
    color: #f3f3f3;
    padding: 0.2rem;
    border-radius: 5%;
  }

  .min-email:hover {
    background-color: #E0E0E0;
  }
</style>
