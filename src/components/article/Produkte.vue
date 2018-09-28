<template>
  <article>
    <div class="image">
      <img class="roundImage" src="static/pic/logo_schwarzkopf.jpg">
    </div>

    <div class="text">

      <h1>Schwarzkopf</h1>
      Ich habe mich einerseits für die Marke Schwarzkopf Professional entschieden, weil mich deren Produkte immer
      zufrieden stellten. Bisher durfte ich miterleben, wie sie jeglichen Bedürfnissen der Haare gerecht
      wurden. <br>

      Schwarzkopf Professional hat für jeden Haartyp das passende Produkt. Auch wenn die Produkte von
      Schwarzkopf Professional nicht die preisgünstigsten sind, ist mir das Geld für meine Kundschaft Wert: Ich möchte
      meinen Kunden nur das Beste vom Besten anbieten können.Die Produkte helfen mir zudem die verschiedenen Frisuren,
      die Sie sich als Kunden wünschen, hinzubekommen. Die Produkte eignen sich ausserdem auch für den Gebrauch
      zuhause. Somit können Sie die Frisuren, die ich ihnen im Salon kreiere, auch zuhause nachstylen.
    </div>

    <div class="image">
      <img class="roundImage" src="static/pic/logo_dobi.jpg">
    </div>

    <div class="text">


      <h1>Dobi</h1>
      Auch bei der Auswahl der Produkte für das Färben und Tönen sind mir gute Produkte wichtig.
      Mir ist es wichtig, dass ich mich auf die Farbergebnisse verlassen kann, was ich bei den Produkten von Venice
      durchaus kann.
      Aus diesem Grund habe ich mich für die Produkte der Marke Venice entschieden.
      Die Produkte bieten eine Palette an schönen Tönen und auch die Abdeckung grauer Haare ist zu 100 % garantiert.
      Ein weiterer erfreulicher Punkt ist, dass hinter der Marke Venice ein Schweizer Produzent steckt.

    </div>
  </article>
</template>

<style scoped>
  article {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 700px) {
    article {
      grid-template-columns: auto;
    }
  }

</style>


<script>
  export default {
    name: "Dienstleistung",
  }
</script>



