

const { createApp } = Vue


  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        contact: false,
      }
    },
    methods: {
      showContact() {
        this.contact = !this.contact;
        console.log(this.contact);
      }
    },
    
  }).mount('#app')
