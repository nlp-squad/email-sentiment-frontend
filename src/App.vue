<template>
  <div class="container">
    <div class="heading">
      <heading></heading>
    </div>
    <div class="body">
      <div class="body-nav">
        <ul class="body-nav-items">
          <router-link @click.native="passAllEmails" to="/" class="body-nav-item" tag="li" active-class="body-nav-item-active" exact>
            <a class="body-nav-link">
              <svg v-svg
              symbol="icon-envelop"
              size="0 0 24 24"
              role="presentation"
              class="body-nav-icon">
              </svg>
              <span>All</span>
              <span class="notification-pill"> {{ numberOfAllEmails }} </span>
            </a>
          </router-link>
          <router-link @click.native="passNegativeEmails" to="/negativeemails" tag="li" active-class="body-nav-item-active" class="body-nav-item" exact>
            <a href="#" class="body-nav-link">
              <svg v-svg
              symbol="icon-angry2"
              size="0 0 24 24"
              role="presentation"
              class="body-nav-icon body-nav-icon-negative">
              </svg>
              <span>Negative</span>
              <span class="notification-pill"> {{ numberOfNegativeEmails }} </span>
            </a>
          </router-link>
          <router-link @click.native="passPositiveEmails" to="/positiveemails" tag="li" active-class="body-nav-item-active" class="body-nav-item" exact>
            <a class="body-nav-link">
              <svg v-svg
              symbol="icon-happy2"
              size="0 0 24 24"
              role="presentation"
              class="body-nav-icon body-nav-icon-positive">
              </svg>
              <span>Positive</span>
              <span class="notification-pill"> {{ numberOfPositiveEmails }} </span>
            </a>
          </router-link>
          <router-link @click.native="passNeutralEmails" to="/neutralemails" tag="li" class="body-nav-item" active-class="body-nav-item-active" exact>
            <a class="body-nav-link">
              <svg v-svg
              symbol="icon-neutral2"
              size="0 0 24 24"
              role="presentation"
              class="body-nav-icon body-nav-icon-neutral">
              </svg>
              <span>Neutral</span>
              <span class="notification-pill"> {{ numberOfNeutralEmails }} </span>
            </a>
          </router-link>
          <router-link @click.native="clickedRoute" to="/tools" class="body-nav-item" tag="li" active-class="body-nav-item-active" exact>
            <a class="body-nav-link">
              <svg v-svg
              symbol="icon-wrench"
              size="0 0 24 24"
              role="presentation"
              class="body-nav-icon">
              </svg>
              <span>Tools</span>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="body-emails-container">
        <router-view :emails="emails" ></router-view>
        <!-- <min-email v-for="(email,k) in emails" :email="email" :key="k"></min-email> -->
      </div>
    </div>
  </div>
</template>

<script>
import heading from './components/Heading.vue'
import axios from 'axios'

export default {
  name: 'App',
  created () {
    let vm = this
    axios.get('http://localhost:3000/emails').then(function (res) {
      // res has data from the server
      res.data.forEach(function (email) {
        vm.emails.unshift(email)
      })
      vm.allEmails = vm.emails
      vm.negativeEmails = vm.allEmails.filter(function (email) {
        return email.Class === 'Negative'
      })
      vm.positiveEmails = vm.allEmails.filter(function (email) {
        return email.Class === 'Positive'
      })
      vm.neutralEmails = vm.allEmails.filter(function (email) {
        return email.Class === 'Neutral'
      })
      vm.numberOfAllEmails = vm.allEmails.length
      vm.numberOfNegativeEmails = vm.negativeEmails.length
      vm.numberOfPositiveEmails = vm.positiveEmails.length
      vm.numberOfNeutralEmails = vm.neutralEmails.length
    })
      .catch(function (error) {
        console.log(error)
      })
  },
  data () {
    return {
      numberOfNegativeEmails: 0,
      numberOfPositiveEmails: 0,
      numberOfNeutralEmails: 0,
      numberOfAllEmails: 0,
      emails: [],
      allEmails: [],
      negativeEmails: [],
      positiveEmails: [],
      neutralEmails: []
    }
  },
  components: {
    heading: heading
  },
  methods: {
    clickedRoute: function () {
      console.log('whoooooo')
    },
    passPositiveEmails: function () {
      this.emails = this.positiveEmails
    },
    passNegativeEmails: function () {
      this.emails = this.negativeEmails
    },
    passNeutralEmails: function () {
      this.emails = this.neutralEmails
    },
    passAllEmails: function () {
      this.emails = this.allEmails
    }
  },
  sockets: {
    connect: function () {
      console.log('Im connected')
    },
    initialised: function (message) {
      console.log(message)
    },
    newmail: function (email) {
      this.allEmails.unshift(email)
      this.numberOfAllEmails = this.allEmails.length
      if (email.Class === 'Negative') {
        this.negativeEmails.unshift(email)
        this.numberOfNegativeEmails = this.negativeEmails.length
      } else if (email.Class === 'Positive') {
        this.positiveEmails.unshift(email)
        this.numberOfPositiveEmails = this.positiveEmails.length
      } else if (email.Class === 'Neutral') {
        this.neutralEmails.unshift(email)
        this.numberOfNeutralEmails = this.neutralEmails.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 120rem;
    height: 60rem;
    background-color: #ccc;
    border-radius: 3px;
    margin: 4rem auto;
    box-shadow: 0 1rem 2rem rgba($color: #000000, $alpha: .3);
    overflow: hidden;
  }

  .heading {
    height: 10%;
    background-color: #faf9f9;
  }

  .body {
    display: flex;
    width: 100%;
    height: 90%;

    &-nav {
      width: 20%;
      background-color: #333;
      height: 100%;
    }

    &-emails-container {
      width: 80%;
      height: 100%;
      background-color: #fff;
      padding: 0 0 1.2rem;
      overflow: scroll;
    }
  }

  .body-nav {
    &-items {
      font-size: 1.4rem;
      list-style: none;
      margin-top: 3.5rem;
    }
    &-item {
      position: relative;
      &:not(:last-child) {
        margin-bottom: .5rem;
      }
    }

    &-item::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 5px;
      background-color: #4FC3F7;
      transform: scaleY(0);
      transition: transform ease .2s,
                  width ease .4s .2s,
                  background-color .1s;
    }

    &-item:hover::before,
    &-item-active::before{
      transform: scaleY(1);
      width: 100%;
    }

    &-item:hover .notification-pill {
      color: #fff;
      background-color: #333;
    }

    &-item:active::before {
      background-color: #81D4FA;
    }

    &-link:link,
    &-link:visited {
      color: #faf9f9;
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 1.5rem 3rem;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 10;
    }
    &-icon {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 2rem;
      fill: currentColor;
      &-negative {
        fill: #E53935;
      }

      &-positive {
        fill: #43A047;
      }

      &-neutral {
        fill: currentColor;
      }
    }
  }
  .notification-pill {
    margin-left: 1rem;
    background-color: #4FC3F7;
    border-radius: 20%;
    padding: 0 .4rem;
    font-weight: 700;
    color: #333;
    transition: all ease .2s .2s;
  }

  .notification-pill-active {
    color: #fff;
    background-color: #333;
  }
</style>
