<template>
  <div class="email-container">
    <div class="heading">
      <h2 class="heading-from"> From: {{ $route.params.from }} </h2>
      <h3 class="heading-subject-data">
        <span class="subject"> Subject:  {{ $route.params.subject }} --- </span>
        <span class="date"> Date And Time Received: {{ $route.params.date }} </span>
      </h3>
      <h3 class="heading-class">
        Class:
        <svg v-if="$route.params.class == 'Positive'" v-svg
              symbol="icon-happy2"
              size="0 0 24 24"
              role="presentation"
              class="class-icon class-icon-positive">
        </svg>
        <svg v-else v-svg
              symbol="icon-angry2"
              size="0 0 24 24"
              role="presentation"
              class="class-icon class-icon-negative">
        </svg>
        {{ $route.params.class }}
      </h3>
    </div>
    <div class="message">
      <p> <span class="message-start">Message: </span> {{ $route.params.message }} </p>
    </div>
    <div class="reply-section">
      Reply:
      <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
      <div v-if="sent" class="sent">
        Message Was Successfully Sent
      </div>
      <div v-if="notSent" class="not-sent">
        Message Was Successfully Not Sent
      </div>
      <div v-if="!sent" class="button-container">
        <button @click="sendemail" class="send-button">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      message: '',
      sent: false,
      notSent: false
    }
  },
  methods: {
    sendemail: function () {
      var emailData = {
        message: this.message,
        subject: this.$route.params.subject,
        address: this.$route.params.address
      }
      axios.post('http://localhost:3000/emails', emailData).then((res) => {
        if (res.status === 200) {
          this.sent = true
        } else if (res.status === 500) {
          this.notSent = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .email-container {
    padding: 3rem;
    font-size: 1.6rem;
  }

  .heading {
    &-from {
      padding: 0 0 1rem;
    }
    &-subject-data {
      padding: 0 0 1rem;
    }
    &-class {
      padding: 0 0 1rem;
    }
  }
  .message p {
    text-align: left;
    padding-top: 1rem;
    font-size: 2.5rem
  }

  .class {
    &-icon {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 0.3rem;
      margin-left: 0.5rem;
      fill: currentColor;
      &-negative {
        fill: #E53935;
      }

      &-positive {
        fill: #43A047;
      }
    }
  }

  .message-start {
    font-weight: 500;
    font-size: 2.5rem;
  }

  .reply-section {
    padding: 2rem 1rem;
    width: 100%
  }

  .reply-section textarea{
    width: 95%;
    resize: none;
    padding: 1rem;
    font-family: Assistant;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .reply-section textarea:focus {
    box-shadow: 0 1rem 2rem rgba($color: #000, $alpha: .15);
    outline: none
  }

  .button-container {
    display: flex;
    flex-direction: row-reverse;
    padding: 2rem;
    width: 95%;
  }

  .send-button {
    border: none;
    background: none;
    padding: 1rem 2rem;
    background: #1976D2;
    border-radius: .2rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 1rem 2rem rgba($color: #000, $alpha: .15);
    // width: 2rem;
  }

  .send-button:hover {
    background-color: #1E88E5;
  }

  .send-button:active {
    box-shadow: none;
  }

  .sent {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    width: 80%;
    padding: 2rem;
    background-color: #42A5F5;
    margin: 2rem auto
  }

</style>
