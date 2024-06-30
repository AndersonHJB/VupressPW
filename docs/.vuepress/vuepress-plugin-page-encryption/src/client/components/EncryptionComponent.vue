<template>
    <div>
      <h1>Enter Password to View the Content</h1>
      <input v-model="password" placeholder="Enter password" />
      <button @click="checkPassword">Submit</button>
      <div v-if="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: '',
        error: null,
      };
    },
    methods: {
      checkPassword() {
        const pagePath = this.$route.path;
        const encryptedPage = __ENCRYPTED_PAGES__.find(page => page.path === pagePath);
        if (!encryptedPage) {
          this.error = 'No such page exists';
          return;
        }
  
        const { passwords } = encryptedPage;
        const validPassword = passwords.find(
          p => p.value === this.password && (p.expiry === -1 || new Date(p.expiry) > new Date())
        );
  
        if (validPassword) {
          this.$router.push({ path: encryptedPage.path });
        } else {
          this.error = 'Invalid password or password expired';
        }
      },
    },
  };
  </script>
  