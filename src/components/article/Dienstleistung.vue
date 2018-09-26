<template>
  <article>
    <div class="text">
      <h1>Make-up</h1>

      Das Make-up soll die Natürlichkeit der Frau betonen. Egal, ob Sie ein leichtes Tages-Make-up, ein intensives
      Abend-Make-up oder ein Hochzeits-Make-up wünschen: Wir erfüllen Ihnen Ihren Wunsch.


      Weitere Angebot:
      <ul>
        <li>Persönliche Schminkberatung</li>
        <li>Schminkkurse in kleinen Gruppen (bis max. 5 Personen)</li>
        <li>Kinderschminken an einem Event oder an Kindergeburtstagen</li>
      </ul>
    </div>



    <div class="text">
      <h1>Treuepass</h1>

      Ihre Treue ist uns viel Wert. Bei Ihrem 10. Besuch erhalten Sie deshalb einen Rabatt von 10 % auf Ihre
      Dienstleistung (exkl. Produkte). Den Treuepass können Sie bei uns im Salon deponieren, damit Sie ihn nicht nach
      Hause nehmen müssen.

      <h2>Weiterempfehlung</h2>

      Empfehlen Sie Sonjas Haarstyle einem Freund / einer Freundin weiter und Sie beide profitieren von 15% Rabatt bei
      Ihrem nächsten Besuch.
      Weitere Informationen erhalten Sie im Salon.

    </div>

    <div class="text">
      <h1>Splissbehandlung</h1>

      Haben Sie lange Haare, die spröde und matt aussehen und es nötig hätten, ein Stück zu schneiden? Möchten Sie jedoch
      die Länge behalten? Dann können wir Ihnen ein 30 bis 60 minütiges Splissschneiden anbieten.
      Obwohl alle gespaltenen Haare auf der ganzen Länge entfernt werden, behälst du die Länge und das Haar sieht
      anschliessend wieder gepflegter und glänzender aus.
      Weitere Informationen erhalten Sie im Salon.

    </div>


    <div class="text">
      <h1>Haarcoloration bei Jugendlichen</h1>

      In der EU ist es verboten unter 16 Jahren die Haare zu färben.
      Die Schweiz hat noch kein verbot aber sie empfehlen es nicht.
      Der Grund ist das Haarfarben Allergische Reaktionen auslösen können und für Erwachsene entwickelt worden sind.
      Der Säureschutzmantel der die Kopfhaut schützt ist mit 16 Jahren noch nicht fertig ausgebildet.
      Deshalb Empehle ich unter 16 Jahren nicht zu färben oder verlange eine Einverständniserklärung von den Eltern.
      <br>
      <br>

      <a class="button"
         target="_blank" rel="noopener noreferrer"
         href="static/doc/Einverstaendniserklaerung.pdf">Erklärung</a>
    </div>
  </article>
</template>

<style scoped>
  article{

    display: grid;
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 900px) {
    article {
      grid-template-columns: auto;
    }
  }


  .button{
    color:  #ffffff;
    border: solid 1px #ffffff;
    padding: 0.5em;
    text-decoration: none;
  }
  .button:hover{
    color:  #e80bc5;
    border: solid 1px #e80bc5;
    padding: 0.5em;
  }

  img{
    border: solid 20px #a4225f;
    width: 300px;
  }


</style>



<script>
  export default {
    name: "Dienstleistung",

  }
</script>



