<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col md="12">
          <b-card
            footer-tag="footer">
            <h4 class="text-center">Мои задачи</h4>
            <b-list-group v-if="this.tasks.length !== 0">
              <b-list-group-item v-for="task in this.tasks" v-bind:href="`/task/${ task.id }`" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ parseType(task.type) + ' #' + task.id }}</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">Статус: {{ parseStatus(task.status) }}</small>
              </b-list-group-item>
            </b-list-group>

            <p v-if="this.tasks.length === 5" class="text-center mt-3">
              <router-link to="/vk/tickets">Смотреть все</router-link>
            </p>

            <p v-if="this.tasks.length === 0" class="text-center mt-3">
              Вам еще не назначено ни одной задачи
            </p>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'assigned-tasks',
    data() {
      return {
        tasks: []
      }
    },
    created() {
      this.$parent.$http.get('http://localhost:1344/task', {
        headers: {
          'Authorization': `Bearer ${ localStorage.getItem('access_token') }`
        }
      }).then(response => {
        const username = localStorage.getItem('username');
        this.tasks =  response.data.filter(_ => _.assigned === username).slice(0, 5).reverse();
      }).catch(err => {
        this.tasks = [];
      });
    },
    methods: {
      parseType(type) {
        if (type === "BOOST") return "Публикация вне очереди";
        if (type === "ADVT") return "Репост";
        return "Эксклюзив";
      },
      parseStatus(status) {
        if (status === "OPEN") return "Ожидает выполнения";
        if (status === "IN_PROGRESS") return "Выполняется";
        if (status === "REJECTED") return "Отменена";
        return "Выполнена";
      }
    }
  }
</script>
