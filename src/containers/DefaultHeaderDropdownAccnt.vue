<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      {{ this.username }}
      <img
        src="img/avatars/7.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>
    <template slot="dropdown">
      <b-dropdown-item to="/profile"><i class="fa fa-user" /> Профиль</b-dropdown-item>
      <b-dropdown-item to="/settings"><i class="fa fa-wrench" /> Настройки</b-dropdown-item>
      <b-dropdown-item @click="logoutHandler"><i class="fa fa-lock" />Выйти</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    logoutHandler(e) {
      e.preventDefault();

      localStorage.clear();

      this.$router.replace({ name: 'Login' });
    }
  },
  computed: {
    username() {
      return localStorage.getItem('username');
    }
  }
}
</script>
