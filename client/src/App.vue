<template>
  <div id="app" class="wrapper">
    
    
    <!--<div v-show="popup" class="popup">
      <div class="popup-text">

        <div class="popup-button">

         <a v-on:click="popup = false">X</a>

        </div>
        <div>


          <h1>Meine Verhaltens-und Hygieneregeln für Ihren sicheren Coiffeurbesuch</h1>

          <div class="highlightMessage">
            Der Bundesrat hat an seiner Sitzung vom 11 Dezember 2020 seine Massnahmen gegen die Ausbreitung des
            Coronavirus verstärkt.<br>

            Das betrifft auch meine Öffnungszeiten. Dienstag & Mittwoch ist nur noch bis 19.00 Uhr geöffnet.
            Voraussichtliche bis 22. Januar. 2021.<br>

          </div>

          Die Gesundheit steht an erster Stelle. Um Ihnen einen entspannten Coiffeurbesuch zu ermöglichen, habe ich
          anhand
          der Vorgaben des BAG mein eigenes Schutzkonzept erarbeitet.<br>
          Bitte lesen Sie alles aufmerksam durch:


          <ul>
            <li>Aus Hygienischen Gründen sind Mundschutz, Hände gründlich waschen und desinfizieren obligatorisch. Sie
              erhalten alles im Salon zu einem solidarischen Preis von CHF 2.00.
            </li>
            <li>Klingeln Sie beim Eingang und warten vor der Tür bis ich Sie abhole.</li>
            <li>Wir müssen auf das gewohnte Händeschütteln verzichten.</li>
            <li>Bitte hängen Sie Ihre Jacke selbstständig auf.</li>
            <li>Hände gründlich waschen und bei der Markierung warten.</li>
            <li>Ich bringe Ihnen Handpapier, Schutzmaske und Handschuhe.</li>
            <li>Ihr Stuhl, sämtliche Arbeitsflächen sowie alle Arbeitsgeräte werden nach jedem Kunden gründlich
              desinfiziert.
            </li>

            <li>Ich bediene Sie mit Handschuhen, Schutzmaske, Schutzbrille oder Visier.</li>
            <li>Zeitschriften sowie Getränke kann ich Ihnen im Moment nicht anbieten.</li>
            <li>Die WC Benützung ist nur im Notfall gestattet.</li>
            <li>Die Bezahlung ohne Bargeld wird bevorzugt, es ist aber weiterhin möglich.</li>
            <li>Termine können nur telefonisch vereinbart werden damit die Anzahl der Personen im Salon laut BAG nicht
              überschritten wird.
            </li>
            <li>Es sind keine Begleitpersonen, auch keine Kinder, erlaubt. Sollte Ihr Kind ein Coiffeurbesuch haben,
              dann
              müssen alle Beteiligten eine Schutzmaske
              tragen und meine Hygieneregeln befolgen. Nach Möglichkeit warten die Eltern draussen.
            </li>
            <li>Falls Sie Symptome haben oder krank sind sagen sie Bitte ihren Termin ab.
              Sonst muss ich Sie ohne vollendete Dienstleistungen wieder nachhause schicken und ihre Gebuchte Zeit in
              Rechnung stellen.
            </li>


          </ul>

          Vielen Dank für Ihre Mithilfe

        </div>


      </div>
    </div>-->

    <header>
      <img v-on:click="route('/')" src="static/pic/shop.jpg">
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
  data() {
    return {
      popup: true
    };
  },
  methods: {
    route: function (route) {
      this.$router.push(route)
    }

  }
}
</script>

<style>
.popup {

  background-color: #7777779e;
  position: absolute;
  width: 100%;
  z-index: 999;
  color: black;
}

.popup-button {
  margin-left: 100%;

}

.highlightMessage{
  color: red;
  padding-bottom: 10px;
}

.popup-text {
  margin: 15%;


  padding: 20px;
  background-color: whitesmoke;
}

.popup a {
  color: #e80bc5;
  border: solid 1px #e80bc5;

}

table, tr, td, th {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 22px;
}

h3 {
  font-size: 20px;
}

h1, h2, h3 {
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
  font-size: 1em;
  background-color: #1b1b1b;
}

.text {
  background-color: #10110d;
  padding: 1em;
  border: solid 3px black;
  margin: 1em;
}

.image {
  display: block;
  padding: 1em 2em;
  margin: 1em;
}

.roundImage {
  border: 2px solid #e80bc5;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  background-color: whitesmoke;
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
  max-height: 500px;

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
