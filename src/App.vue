<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
    if (localStorage.getItem('access_token')) {
      this.$parent.$http.get('http://localhost:1344/auth', {
        headers: {
          'Authorization': `Bearer ${ localStorage.getItem('access_token') }`
        }
      }).then(response => {
        localStorage.setItem('user_id', response.data.id);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('user_role', response.data.role);
      }).catch(err => {
        this.$router.replace({ name: 'Login' });
      });
    } else {
      this.$router.replace({ name: 'Login' });
    }
  }
}
</script>

<style lang="scss">
  // CoreUI Icons Set
  @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  /* Import Flag Icons Set */
  @import '~flag-icon-css/css/flag-icon.min.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
