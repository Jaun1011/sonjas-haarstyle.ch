<template>
  <article>
    <div class="text">
      <h1>Coiffeur Salon mit Herz</h1>

      Momentan herschen spetzielle Massnahmen wegen der Coronakriese. <a href="static/doc/Schutzkonzept.pdf">Hier</a> können Sie nachlesen wie wir damit umgehen.      <br>

      Unser Konzept ist sehr einfach: Es basiert darauf, Ruhe in den Alltag zu bringen,
      da unser Leben immer hektischer und schnelllebiger wird.
      Wir nehmen uns daher für jeden Kunden genügend Zeit.<br>
      <br>
      Wir beherrschen noch das alte Handwerk. Bei uns wird der grösste Teil mit Schere und Messer geschnitten.<br>
      <br>
      Unsere Spezialität ist Entspannung durch eine angenehme Kopfmassage.<br>



      <br>
      Wir freuen uns auf Ihr Besuch in Worb
    </div>
    <div class="quaderImage" >
      <img class="imageStyle" src="static/pic/DSC_0135.jpg">
    </div>

  </article>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped>
  article{
    display: grid;
    grid-template-columns: 1fr 40%  ;
    grid-column-gap: 1em;
  }

  @media only screen and (max-width: 900px) {
    article {
      grid-template-columns: auto;
    }
  }

  .quaderImage{
    height: 100%;
    width: 100%;
  }


  .imageStyle{
    width: 70%;
    display: block;
    margin: 1em auto;

    border: solid 20px #e80bc5;


  }

  a{
    color:  #e80bc5;

  }
</style>
