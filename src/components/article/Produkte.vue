<template>
  <article>
    <div class="image">
      <img class="roundImage" src="static/pic/logo_schwarzkopf.jpg">
    </div>

    <div class="text">

      <h1>Schwarzkopf</h1>
      Wir haben uns einerseits für die Marke Schwarzkopf Professional entschieden, weil uns deren Produkte immer
      zufrieden stellten. Bisher durften wir miterleben, wie sie jeglichen Bedürfnissen der Haare gerecht
      wurden. <br>

      Schwarzkopf Professional hat für jeden Haartyp das passende Produkt. Auch wenn die Produkte von
      Schwarzkopf Professional nicht die preisgünstigsten sind, ist Uns das Geld für die Kundschaft Wert:
      Wir möchten unsere Kunden nur das Beste vom Besten anbieten können.
      Die Produkte helfen uns zudem die verschiedenen Frisuren, die Sie sich als Kunden wünschen, hinzubekommen.
      Die Produkte eignen sich ausserdem auch für den Gebrauch zuhause.
      Somit können Sie die Frisuren, die Wir Ihnen im Salon kreiere, auch zuhause nachstylen.
    </div>

    <div class="image">
      <img class="roundImage" src="static/pic/logo_dobi.jpg">
    </div>

    <div class="text">

      <h1>Dobi</h1>
      Auch bei der Auswahl der Produkte für das Färben und Tönen sind uns gute Produkte wichtig.
      Uns ist es wichtig, dass wir uns auf die Farbergebnisse verlassen können,
      was bei den Produkten von Dobi der Fall ist.
      Aus diesem Grund haben wir uns für die Produkte der Marke Dobi entschieden.
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



