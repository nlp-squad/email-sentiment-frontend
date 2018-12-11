<template>
  <div class="email-container">
    <div class="heading">
      <h2 class="heading-from"> Tanaka Muchandibaya </h2>
      <h3 class="heading-subject-data">
        <span class="subject"> Customer Service - </span>
        <span class="date"> 12/12/2018 </span>
      </h3>
      <div class="message">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ab itaque alias incidunt nesciunt repellendus aut dicta rem veniam, iure veritatis odio aperiam vero error repellat explicabo quibusdam ex voluptatibus nulla odit. Ab atque ipsa modi vel? Optio, suscipit! Voluptate nam quod assumenda, cumque hic quis exercitationem consequatur qui atque voluptatem, quaerat delectus molestias vero eius natus? Nihil ab cum unde ut commodi aperiam aspernatur iste similique enim, magnam ad veritatis atque non nam velit necessitatibus officiis blanditiis doloribus beatae nostrum iure eaque voluptas. Fugiat consectetur earum pariatur temporibus sequi molestiae officia voluptates est nobis, blanditiis harum odit ipsam accusamus.</p>
      </div>
      <div class="reply-section">
        Reply:
        <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
        <div class="button-container">
          <button @click="sendemail" class="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendmessage: function () {
      emailData: {
        message = this.message
        subject = ""
      }
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
  }

  .message p {
    text-align: justify;
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

</style>
