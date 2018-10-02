<template>
  <article>
    <div class="image">
       <img class="roundImage" src="static/pic/me.jpg"/>
    </div>
    <div class="text">
      <h1>Sonja Hofer</h1>
      Coiffeuse sein ist mein Traumberuf und ich habe das Glück, dass ich ihn jeden Tag mit viel Freude, Leidenschaft und Herzblut ausüben darf.
      Bereits in meiner Lehrzeit war es ein Traum von mir, eines Tages mein eigenes Geschäft zu haben.
      Diesen Traum konnte ich mir am 8. September 2015 erfüllen, als ich meinen eigenen Salon in Worb eröffnen durfte.<br>
      <br>

      Mein Konzept ist sehr einfach: Es basiert darauf, Ruhe in den Alltag zu bringen, da unser Leben immer hektischer und schnelllebiger wird.
      Es ist mir ein grosses Anliegen, dass meine Kundschaft mein Geschäft entspannt und zufrieden verlässt und eine kurze Auszeit geniessen konnte.<br>
      <br>

      Beim Haarewaschen verwöhne ich meine Kunden jeweils mit einer kurzen, entspannenden Kopfmassage.
      Diese Massage kann auch in verlängerter Form gebucht werden. Sie ist ein sehr geeignetes Mittel, um zur Ruhe zu kommen.
      Des Weiteren biete ich auch ein ganzheitliches Entspannungsprogramm an. Dazu erkundigen Sie sich am besten direkt bei mir.
      Dieses Entspannungsprogramm ist bei meiner Kundschaft sehr beliebt – alle schwärmen davon.<br>
      <br>

      Weil ich noch das alte Handwerk beherrsche, wird bei mir der grösste Teil mit Schere und Messer geschnitten.
      Die Haarschnitte werden so viel präziser, weil ich dadurch besser auf die Fallrichtung der Haare eingehen und die Kopfform beachten kann.<br>
      <br>

      Damit ich auf individuelle Wünsche eingehen kann und wir zusammen Frisuren entwickeln können,
      welche auch zu Hause wieder gelingen, nehme ich mir für jeden Kunden genügend Zeit.<br>
      <br>

      Ich freue mich auf Ihren Besuch<br>
      <br>

      Ihre Coiffeuse Sonja Hofer

    </div>

  </article>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style scoped>
  article {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  @media only screen and (max-width: 900px) {
    article {
      grid-template-columns: auto;
    }
  }

</style>
