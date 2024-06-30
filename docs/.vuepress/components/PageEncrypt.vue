// .vuepress/components/PageEncrypt.vue

<template>
  <div v-if="passwordRequired">
    <form @submit.prevent="checkPassword">
      <input v-model="inputPassword" type="password" placeholder="Enter password" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputPassword: '',
      passwordRequired: true,
    };
  },
  methods: {
    checkPassword() {
      // 模拟从某处获取密码和有效期
      const passwords = this.$site.passwords[this.$route.path];
      const isValid = passwords.some(p => {
        const now = new Date();
        if (p.expiry === -1 || new Date(p.expiry) > now) {
          return p.password === this.inputPassword;
        }
        return false;
      });

      if (isValid) {
        this.passwordRequired = false;
      } else {
        alert('Wrong or expired password!');
      }
    }
  }
}
</script>
