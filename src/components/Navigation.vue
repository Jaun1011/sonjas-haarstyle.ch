<template>
  <main>
    <nav v-for="(navigation) in navigations"
         v-on:click="route(navigation.url)">
      {{navigation.label}}

    </nav>
  </main>

</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        navigations: [
          {url: '/dienstleistung', label: 'Dienstleistung'},
          {url: '/produkte', label: 'Produkte'},

          {url: '/preise', label: 'Preise'},
          {url: '/team', label: 'Team'},
          {url: '/galerie', label: 'Galerie'},
          {url: '/news', label: 'News'},
        ]
      }
    },
    methods: {
      route: function (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  main {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
  }

  nav {
    font-size: 24px;

    padding-top: 1fr;
    padding-bottom: 1fr;

    border: solid 4px #28282a;

    text-align: center;
    color: #e80bc5;

    background-color: #1b1b1b;
  }

  .active{
    background-color: red;
  }
  nav:hover {
    background-color: #e2a1d5;
  }
</style>
