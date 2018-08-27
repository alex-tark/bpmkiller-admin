<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="5">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Убиваю CRM</h1>
                  <p class="text-muted">Войдите в свой персональный аккаунт</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username" v-model="input.username" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" v-model="input.password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="12" class="text-center">
                      <b-button variant="primary" class="px-5" @click="submitHandler">Войти</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();

      if (!this.username && !this.password) {
        this.$http.post('http://localhost:1344/auth',
          {
            username: this.input.username,
            password: this.input.password
          }).then(response => {
          if (response.data.error) {
            alert('Не верные данные для входа!');
          } else {
            localStorage.setItem("access_token", response.data.access_token);

            localStorage.setItem('user_id', response.data.user.id);
            localStorage.setItem('username', response.data.user.username);
            localStorage.setItem('user_role', response.data.user.role);
            this.$router.replace({ name: 'Главная' });
          }
        }).catch(err => {
          alert(err);
        });
      } else {
          alert('Не верные данные для входа!');
      }
    }
  }
}
</script>
