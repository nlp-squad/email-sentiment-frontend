<template>
  <div>
    <min-email v-for="(email,k) in emails" :email="email" :key="k"></min-email>
  </div>
</template>

<script>
import MinEmail from './MinEmail.vue'

export default {
  props: ['numberOfAllEmails', 'emails'],
  components: {
    MinEmail: MinEmail
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
