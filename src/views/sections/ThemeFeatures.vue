<template>
  <base-section id="theme-features">
    <base-section-heading title="Our Awesome Clients">
    </base-section-heading>

    <v-container>
      <v-row>

        <v-card
            class="mx-auto elevation-20"
            color="purple"
            dark
            style="max-width: 400px;"
          >
            <v-row justify="space-between">
              <v-col cols="8">
                <v-card-title>
                  <div>
                    <div>DK international is amazing.</div>
                    <div>(2020)</div>
                  </div>
                </v-card-title>
              </v-col>
              <v-img
                class="shrink ma-2 rounded-circle"
                contain
                height="125px"
                :src="require('@/assets/dk_img/customer.jpg')"
                style="flex-basis: 125px; border-radius: 50%;"
              ></v-img>
            </v-row>
            <v-divider dark></v-divider>
            <v-card-actions class="pa-4">
              John Doe
              <v-spacer></v-spacer>
              <span class="grey--text text--lighten-2 caption mr-2">
                ({{ rating }})
              </span>
              <v-rating
                value="4"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
              ></v-rating>
            </v-card-actions>
        </v-card>

        <v-card
    class="mx-auto elevation-20"
    color="purple"
    dark
    style="max-width: 400px;"
  >
    <v-row justify="space-between">
      <v-col cols="8">
        <v-card-title>
          <div>
            <div>DK international is amazing.</div>
            <div>(2020)</div>
          </div>
        </v-card-title>
      </v-col>
      <v-img
        class="shrink ma-2 rounded-circle"
        contain
        height="125px"
        :src="require('@/assets/dk_img/customer.jpg')"
        style="flex-basis: 125px; border-radius: 50%;"
      ></v-img>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4">
      Zhang Wei
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
      <v-rating
        value="4"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Pixel Perfect Design',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Retina Ready',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easily Customizable',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Image Parallax',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Seo Optimized',
          icon: 'mdi-ice-pop',
        },
        {
          title: '24/7 Support',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
