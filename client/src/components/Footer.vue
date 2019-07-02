<template>
  <footer>
    <div class="open">
      <h1>Öffnungszeiten</h1>
      <table>
        <tr v-bind:key="(time) in times">
          <td>{{time.day}}</td>
          <td>{{time.early}}</td>
          <td>{{binding(time.late)}}</td>
          <td>{{time.late}}</td>
        </tr>
      </table>
    </div>

    <div class="pay">
      <h1>Zahlungsmöglichkeiten</h1>
      Visa, MasterCard, American Express 2.5%<br>
      Maestro 1.5%<br>
      Zu Lasten des Kunden<br>
      <img src="static/icons/mastercard.svg">
      <img src="static/icons/maestro.svg">
      <img src="static/icons/visa.svg">
      <img src="static/icons/american-express.svg">
    </div>

    <div class="contact">
      <h1>Kontakt</h1>

      <a target="_blank" rel="noopener noreferrer"
        href="https://www.google.ch/maps/place/Vechigenstrasse+16,+3076+Worb/@46.9323735,7.5625977,874m/data=!3m1!1e3!4m5!3m4!1s0x478e342edf32a533:0xce16060955cd2c49!8m2!3d46.9327893!4d7.562756">
        Sonjas-Haarstyle<br>
        Vechigenstrasse 16<br>
        3076 Worb<br>
      </a>

      +41 31 832 41 94<br>
      <a target="_blank" rel="noopener noreferrer"
         href="https://www.instagram.com/sonjas_haarstyle/?hl=de">
        <img src="static/icons/instagram.svg">
      </a>


      <a target="_blank" rel="noopener noreferrer"
         href="https://de-de.facebook.com/sonjashaarstyle/">
        <img src="static/icons/facebook.svg">
      </a>

      <a target="_blank" rel="noopener noreferrer"
         href="https://www.youtube.com/channel/UC6EOSY_vno7NSLkA_38usAg">
        <img src="static/icons/youtube.svg">
      </a>

      <a target="_blank" rel="noopener noreferrer"
         href="mailto:hairstylistin@hotmail.ch" >
        <img src="static/icons/email.svg">
      </a>

      <!--
      <a target="_blank" rel="noopener noreferrer"
         href="mailto:info@sonjas-haarstyle.ch" >
        <img src="static/icons/email.svg">
      </a>
      -->
    </div>
  </footer>

</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        times: [
          {day: "Montag", early: "Geschlossen"},
          {day: "Dienstag", early: "08:00 - 12:00", late: "13:30 - 20:00"},
          {day: "Mittwoch", early: "10:00 - 12:00", late: "13:30 - 20:00"},
          {day: "Donnerstag", early: "08:00 - 12:00", late: "13:30 - 18:30"},
          {day: "Freitag", early: "08:00 - 17:00"},
          {day: "Samstag", early: "08:00 - 14:00"},
          {day: "Sonntag", early: "Geschlossen",}
        ]
      }
    },
    methods: {
      binding(val) {
        return val ? "/" : ""
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    font-size: 1.1em;
    color: #e80bc5;
  }
  a{
    color: white;
  }

  img {
    margin-top: 1em;
    width: 2em;
  }

  footer {
    border-top: solid 4px #e80bc5;
    background-color: #1c1f22;

    padding: 0.5em;
    font-size: 1em;

    display: grid;
    grid-template-columns: auto auto auto;

  }

  @media only screen and (max-width: 900px) {
    footer {
      grid-template-columns: auto;
    }
  }


  table td {
    padding-right: 15px;
  }
</style>
