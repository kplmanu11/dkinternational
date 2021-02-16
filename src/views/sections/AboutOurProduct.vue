<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About US"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'Grow your Revenue',
          // subtitle: 'Best Productivity',
          text: 'Founded in 2010, DK international is a revolutionary in the trade industry. It is a privately held company based in Guangzhou, China. We have helped our clients to trade in different forms of business in a secure and reliable way. We have a team of professionals who have collective knowledge and expertise that gives us a unique advantage in providing professional services to trade across a broad range of industries. Quality excellence is the foundation of the management of our business and the keystone of our aim for customer satisfaction. Therefore, it is DK International’s policy to consistently provide best trade services that meet customer requirements and exceed their expectations.', 
        },
        {
          title: 'Vision',
          // subtitle: 'Best Productivity',
          text: 'To be the most trusted, customer-centric, multi-channel B2B trade platform and enhance quality of life and mutual understanding across borders by promoting authentic global trade',

        },
        {
          title: 'Mission',
          // subtitle: 'Best Productivity',
          text: 'Connect authentic buyers and suppliers worldwide, with tailored solutions and reliable market intelligence. Also, help customer meet the challenges of a changing world and seize new opportunities',

        },
      ],
    }),
  }
</script>

