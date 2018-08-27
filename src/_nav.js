export default {
  items: [
    {
      title: true,
      name: 'Убиваю BPM вконтакте',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Тикеты',
      url: '/vk/tickets',
      icon: 'icon-bell'
    },
    {
      name: 'Мои задачи',
      url: '/vk/tasks',
      icon: 'icon-clock'
    },
    {
      name: 'Архив',
      url: '/vk/done'
    },
    {
      title: true,
      name: 'Убиваю BPM battle',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Заявки',
      url: '/battle/loans',
      icon: 'icon-pencil',
      children: [
        {
          name: 'Все',
          url: '/battle/loans/all'
        },
        {
          name: 'Без решения',
          url: '/battle/loans/newest'
        },
        {
          name: 'Избранные',
          url: '/battle/loans/favorite'
        }
      ]
    },
    {
      name: 'Участники',
      url: '/battle/members',
      icon: 'icon-star'
    },
    {
      name: 'Документы',
      url: '/battle/assets',
      icon: 'icon-calculator'
    },
    {
      name: 'Календарь',
      url: '/battle/schedule',
      icon: 'icon-clock'
    },
    {
      name: 'Настройки',
      url: '/battle/settings',
      icon: 'icon-settings'
    }
  ]
}
