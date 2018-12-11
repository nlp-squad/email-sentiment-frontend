<template>
  <div class="min-email">
    <div class="min-email-from"> {{ email.FromName }} </div>
    <div class="min-email-body">
      <span class="min-email-subject"> {{ email.Subject }} </span> -
      <span class="min-email-message"> {{ email.Message }} </span>
        <router-link to="/reademail" tag="button" class="min-email-reply" :email="email">
          <svg v-svg
          symbol="icon-reply"
          size="0 0 16 16"
          role="presentation"
          ></svg>
        </router-link>
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
    height: 6rem;
    padding: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

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
      padding: .2rem;
      background: none;

      &:hover {
         border-radius: 50%;
         background-color: #616161;
         cursor: pointer;
      }

      &:active, &:visited {
        outline: none;
        border: none
      }
    }
  }

  .min-email:hover {
    background-color: #E0E0E0;
  }
</style>
