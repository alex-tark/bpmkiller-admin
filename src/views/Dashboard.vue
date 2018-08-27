<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <h4>Убиваю BPM Вконтакте</h4>
      </b-col>

      <b-col sm="12" lg="12">
          <b-row>
            <b-col sm="12" lg="6">
              <list-groups></list-groups>
            </b-col>

            <b-col lg="6" sm="12" class="mb-3">
              <b-card>
                  <h4 class="text-center">Мои задачи</h4>
                  <p class="mt-5 text-center small">Не найдено</p>
              </b-card>
            </b-col>
          </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12">
        <h4>Убиваю BPM Battle</h4>
      </b-col>

      <b-col sm="12" lg="6">
        <b-card>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet asperiores culpa cumque est, et eveniet exercitationem, explicabo facilis impedit inventore iure maxime pariatur praesentium quae quaerat quos soluta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet asperiores culpa cumque est, et eveniet exercitationem, explicabo facilis impedit inventore iure maxime pariatur praesentium quae quaerat quos soluta?</p>
        </b-card>
      </b-col>

      <b-col sm="12" lg="6">
        <b-card>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet asperiores culpa cumque est, et eveniet exercitationem, explicabo facilis impedit inventore iure maxime pariatur praesentium quae quaerat quos soluta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet asperiores culpa cumque est, et eveniet exercitationem, explicabo facilis impedit inventore iure maxime pariatur praesentium quae quaerat quos soluta?</p>
        </b-card>
      </b-col>

      <b-col sm="12" lg="12">
        <b-card>
          <b-row>
            <b-col lg="12" class="mb-3">
              <h2 class="text-center">Заявки на участие</h2>
              <p class="text-center small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet asperiores culpa cumque est, et eveniet exercitationem, explicabo facilis impedit inventore iure maxime pariatur praesentium quae quaerat quos soluta? Lorem ipsum dolor sit ametexplicabo facilis impedit inventore iure maxime pariatur </p>
            </b-col>

            <b-col sm="12" lg="4" class="text-center">
              <h1>342</h1>
              <h5 class="small text-muted">На очереди</h5>
            </b-col>

            <b-col sm="12" lg="4" class="text-center">
              <h1>3423</h1>
              <h5 class="small text-muted">Просмотрено</h5>
            </b-col>

            <b-col sm="12" lg="4" class="text-center">
              <h1>1450</h1>
              <h5 class="small text-muted">Отклонено</h5>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-vk">
            <i class="fa fa-vk"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" height="90"/>
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">500+</div>
              <div class="text-uppercase text-muted small">подписчиков</div>
            </div>
            <div>
              <div class="text-value">292</div>
              <div class="text-uppercase text-muted small">репостов</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-twitter">
            <i class="fa fa-twitter"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" height="90"/>
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">973k</div>
              <div class="text-uppercase text-muted small">подписчиков</div>
            </div>
            <div>
              <div class="text-value">1.792</div>
              <div class="text-uppercase text-muted small">твитов</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-youtube">
            <i class="fa fa-youtube-square"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" height="90"/>
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">1035k</div>
              <div class="text-uppercase text-muted small">подписчиков</div>
            </div>
            <div>
              <div class="text-value">92</div>
              <div class="text-uppercase text-muted small">circles</div>
            </div>
          </div>
        </div>
      </b-col>

      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-facebook">
            <i class="fa fa-facebook"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" height="90"/>
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">89k</div>
              <div class="text-uppercase text-muted small">друзей</div>
            </div>
            <div>
              <div class="text-value">459</div>
              <div class="text-uppercase text-muted small">упоминаний</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <blockquote class="blockquote text-right">
      <p class="mb-0 small">Lorem ipsum dolor sit amet, suka.. О! Так Вы англичанин?!</p>
      <footer class="blockquote-footer small"><cite title="Source Title">Виктор П.</cite></footer>
    </blockquote>
  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'
import ListGroups from "./base/ListGroups";

export default {
  name: 'dashboard',
  components: {
    ListGroups,
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  },
  computed: {
    username () {
      return localStorage.getItem('username');
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
