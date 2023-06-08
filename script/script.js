

const { createApp } = Vue


  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        contact: false,
        password: "keysofsicily2023"
      }
    },
    methods: {
      showContact() {
        this.contact = !this.contact;
        console.log(this.contact);
      },

      copy() {
        console.log(this.password)
        navigator.clipboard.writeText(this.password);
        alert("Testo copiato: " + this.password);
    }
    },
    
  }).mount('#app')
