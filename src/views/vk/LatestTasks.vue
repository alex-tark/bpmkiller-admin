<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col md="12">
          <b-card
            footer-tag="footer">
            <h4 class="text-center">Последние действия</h4>
            <b-list-group>

              <b-list-group-item v-for="task in this.tasks" v-bind:href="`/task/${ task.id }`" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ parseType(task.type) + ' #' + task.id }}</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">{{ task.assigned ? `Назначено: ${ task.assigned }` : 'Не назначено' }}</small>
              </b-list-group-item>

            </b-list-group>

            <p class="text-center mt-3">
              <router-link to="/vk/tickets">Посмотреть все</router-link>
            </p>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'latest-tasks',
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
        this.tasks =  response.data.slice(response.data.length - 5).reverse();
      }).catch(err => {
        this.tasks = [];
      });
    },
    methods: {
      parseType(type) {
        if (type === "BOOST") return "Публикация вне очереди";
        if (type === "ADVT") return "Репост";
        return "Эксклюзив";
      }
    }
  }
</script>
