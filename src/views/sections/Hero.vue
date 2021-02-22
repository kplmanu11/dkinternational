<template>
  <v-carousel
  cycle
  :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>

</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    data () {
      return {
        items: [
          {
            src: require('@/assets/dk_img/home-1.jpg'),
          },
          {
            src: require('@/assets/dk_img/home-2.jpg'),
          },
          {
            src: require('@/assets/dk_img/home-3.jpg'),
          },
          // {
          //   src: require('@/assets/dk_img/home-4.jpg'),
          // },
        ],
      }
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
