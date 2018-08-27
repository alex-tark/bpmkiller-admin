<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" lg="6">
        <b-card>
          <h2>Пользователь {{ this.user.username }}</h2>
          <p class="small mb-4">{{ this.user.role === 1 ? "Управляющий" : "Сотрудник" }}</p>
          <h5><span class="small">EMAIL</span>: {{ this.user.email }}</h5>
          <h5><span class="small">ПОЛНОЕ ИМЯ</span>: {{ this.user.fio }}</h5>

          <a href="https://vk.com">ВКОНТАКТЕ</a>
        </b-card>
      </b-col>

      <b-col sm="12" lg="6">
        <list-groups></list-groups>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import ListGroups from "./base/ListGroups";

  export default {
    name: 'profile',
    components: {
      ListGroups
    },
    data: function () {
      return {
        user: {
          username: "",
          email: "",
          role: 2,
          vk: "",
          fio: ""
        }
      }
    },
    mounted() {
      const access_token = localStorage.getItem('access_token');
      const userId = localStorage.getItem('user_id');
      this.$parent.$http.get(`http://localhost:1344/user/${ userId }`, {
        headers: {
          'Authorization': `Bearer ${ access_token }`
        }
      }).then(response => {
        if (response.data) {
          this.user.username = response.data.username;
          this.user.email = response.data.email;
          this.user.role = response.data.role;
          this.user.vk = response.data.vk;
          this.user.fio = response.data.fio;
        }
      }).catch(err => {
        console.log(err)
      });
    }
  }
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
