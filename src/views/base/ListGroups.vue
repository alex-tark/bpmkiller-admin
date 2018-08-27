<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col md="12">
          <b-card
            footer-tag="footer">
            <h4 class="text-center">Последние действия</h4>
            <b-list-group>

              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Публикация вне очереди #5341</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">Назначено: vpenka</small>
              </b-list-group-item>

              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Публикация вне очереди #5340</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">Не назначено</small>
              </b-list-group-item>

              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Публикация вне очереди #5339</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">Не назначено</small>
              </b-list-group-item>

              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Репост #5338</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">Назначено: admin</small>
              </b-list-group-item>

              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Публикация вне очереди #5337</h5>
                  <small class="text-muted">2 days ago</small>
                </div>
                <small class="text-muted">Не назначено</small>
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
  name: 'list-groups'
}
</script>

