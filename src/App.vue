<template>
  <div id="app" class="wrapper">

    <header>
      <img v-on:click="route('/')" src="static/pic/header.jpg">
    </header>

    <navigation></navigation>

    <router-view/>
    <Footer></Footer>
    <div class="galierie"></div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Footer,
      Navigation
    },
    methods: {
      route: function (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style>

  h1{
    font-size: 24px;
  }
  h2{
    font-size: 22px;
  }
  h3{
    font-size:20px;
  }
  h1,h2,h3{
    margin: 10px 0 10px;
  }

  html, body, #app {
    font-size: 16px;
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #030102;
    margin: 0;
    overflow-y: scroll;
  }

  article {
    font-size: 20px;
    background-color: #1b1b1b;
  }

  .text{
    background-color: #10110d;
    padding:1em 2em;
    border: solid 3px black;
    margin: 10px;
  }

  #app {
    grid-template-columns: 10% auto 10%;
    grid-template-rows: auto auto 1fr auto;

    display: grid;
    background-color: rgba(3, 1, 2, 0.78);
    color: #f7fcff;
  }

  header, main, article, footer {
    grid-column: 2 /3;
  }

  header img {
    display: block;
    width: 70%;

    margin: 0px auto;

  }

  /*Scrollbar*/
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

</style>
