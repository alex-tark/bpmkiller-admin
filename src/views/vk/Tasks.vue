<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <div class="row">
        <div v-for="task in this.tasks" class="col-sm-12 col-lg-7 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ parseType(task.type) + ' #' + task.id }}</h5>
              <p class="card-text">{{ task.description }}</p>

              <span v-if="task.assigned" class="small">Назначено: <a v-bind:href="`/user/${ task.assigned }`">{{ task.assigned }}</a></span>
              <p v-if="task.assigned" class="small text-muted">Статус: {{ parseStatus(task.status) }}</p>
              <p class="small">{{ parseInt(task.time) !== 0 ? `Выполнить до ${ parseDate(task.time) }` : '' }}</p>
              <a v-if="!task.assigned" href="#" class="btn btn-danger">Назначить себя</a>
              <a v-if="isAdmin" class="btn" v-bind:href="'/'"><i class="fa fa-pencil"></i> Редактировать</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'all-tasks',
    data() {
      return {
        tasks: [],
        limit: 10
      }
    },
    created() {
      this.$parent.$http.get('http://localhost:1344/task', {
        headers: {
          'Authorization': `Bearer ${ localStorage.getItem('access_token') }`
        }
      }).then(response => {
        this.tasks =  response.data.filter(_ => _.status !== "DONE" && _.status !== "REJECTED").slice(0, 10).reverse();
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
      },
      parseDate(ms) {
        let resultTime = Date.now() + parseInt(ms);
        const date = new Date(resultTime);
        return date.toDateString();
      }
    },
    computed: {
      isAdmin() {
        return parseInt(localStorage.getItem('user_role')) === 1;
      }
    }
  }
</script>
