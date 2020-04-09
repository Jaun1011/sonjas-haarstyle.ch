<template>
  <article>
    <div class="text first">
      <h1>Damen</h1>
      <table>
        <thead>
        <tr>
          <th>Artikel</th>
          <th class="price">Kurz</th>
          <th class="price">Mittel</th>
          <th class="price">Lang</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(woman) in women">
          <td>{{woman.label}}</td>
          <td class="price">{{woman.short}}</td>
          <td class="price">{{woman.middle}}</td>
          <td class="price">{{woman.long}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="text">
      <h1>Herren</h1>
      <table>
        <thead>
        <tr>
          <th>Artikel</th>
          <th class="price">Kurz</th>
          <th class="price">Mittel</th>
          <th class="price">Lang</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(man) in men">
          <td>{{man.label}}</td>
          <td class="price">{{man.short}} </td>
          <td class="price">{{man.middle}}</td>
          <td class="price">{{man.long}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="text">
      <h1>Kinder</h1>
      <table>
        <thead>
        <tr>
          <th>Artikel</th>
          <th class="price">Mädchen</th>
          <th class="price">Jungen</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(child) in children">
          <td>{{child.label}}</td>
          <td class="price">{{child.footnote? child.footnote: ""}} {{child.girl}}</td>
          <td class="price">{{child.footnote? child.footnote: ""}} {{child.boy}}</td>
        </tr>
        </tbody>
      </table>

      <br>
      * Waschen ohne Shampoo bei Kindern 5.- Rabatt
    </div>

    <div class="text">
      <h1>Kosmetik</h1>
      <table>
        <thead>
          <tr>
            <th>Artikel</th>
            <th class="price">Preis</th>
          </tr>
        </thead>

        <tbody>
        <tr v-for="(cosmetic) in cosmetics">
          <td>{{cosmetic.label}}</td>
          <td class="price">{{cosmetic.price}}</td>
        </tr>
        </tbody>
      </table>
    </div>


    <div class="text line">
      Alle Preise sind in CHF und inklusive  MWST.
    </div>


    <div></div>
  </article>
</template>

<style scoped>
  article {
    display: grid;
    grid-template-columns: auto auto;

  }

  @media only screen and (max-width: 900px) {
    article {
      grid-template-columns: auto;
    }
  }

  .first {
    grid-row: 1 / 3;
  }

  table {
    width: 100%;
  }

  thead th {
    text-align: left;
    border-bottom: 1px solid white;
  }

  .price {
    text-align: right;
  }

</style>


<script>

  export default {
    name: "Dienstleistung",
    data() {
      function transormCSV(csv){
        const values = csv.split(";")
        let result = [];
        for(let i = 0; i < values.length; i++){
            if(i % 4 === 0){
                result.push({
                    label: values[i],
                    short: values[i+1],
                    middle: values[i+2],
                    long: values[i+3],
                })
              };
          }
          console.log(result);
        return result;
      }



      const csvwoman = "waschen, föhnen inkl. Kopfmassage;43;58.5;66;waschen, legen inkl. Kopfmassage;58.5;73.5;81.5;waschen, schneiden, föhnen inkl. Kopfmassage ( 60min / 60min / 75min );78;84;97.5;Aufpreis ( zusätzliche 15min );;19.5;;schneiden, föhnen ;73;79;92.5;nur schneiden ( ab 45min / 50min / 60min );58.5;65;78;Fransen, Nacken, Kontur  (pro min);1.3;1.3;;Split-Ender Pro  (pro min);1.3;1.3;;Hochsteckfrisur  ( 1h / 1,5h / 2h );88;127;166;färben  (  bis: 50ml/ 70ml / 100ml );85;94;106;tönen  (bis: 40ml / 60ml /  100ml );79;84;104;Aufpreis ( zusätzliche Farbe );12.8;;;Fiberplex ;20;;;Farbpflege  ( während der Farbe / 30ml / 60ml/  90ml);12;24;36;Schaumtönung ;44;58;73;Folienméches   ( 1h / 1,5h / 2h ) ;99;134;168;Haubenméches;;95;;Dauerwelle ganz   ( 1,5h / 1,5h / 2h );129;144;178;Dauerwelle halb  ;119;138;168;Hochzeitpaket inkl. Geschenk;;;;Braut Make - up & 1 Probetermin ( Probe 120min / Braut Make-up 90min);283;;;Brautfrisur & 1 Probestecken   ( Probe 120min / Braut Make-up 90min);315;;"
      const csvmen = "waschen, schneiden föhnen inkl. Kopfmassage;58.5;78; 84.00 / 97.50;schneiden ( 30min / 45min / 60min );39;58.5;78;ausputzen (15 min);;19.5;;Maschinenschnitt, Kranz;33;41;47;Bart schneiden  ( 30min / 45min  );                                                     39.00 /  58.50;;;Schnurrbart ( 10 min );13;;;färben  ( bis: 50ml/ 70ml / 100ml );85;94;106;MenReshade Service  (nach Aufwand);58.5;78;84;"


      return {
        cosmetics: [
          {label: "Brauen färben", price: 22},
          {label: "Wimpern färben", price: 22},
          {label: "Brauen zupfen", price: 34},
          {label: "Tages Make - up", price: 80},
          {label: "Braut Make - up", price: 115}
        ],
        women: transormCSV(csvwoman),
        men:  transormCSV(csvmen),
        children: [
          {label: "0 - 4 Jahre oder Maschinenschnitt", girl: 25.00, boy: 25.00},
          {label: "5 - 7 Jahre", girl: 53.00, boy: 36.00, footnote: "*"},
          {label: "8 - 10 Jahre", girl: 68.00, boy: 38.00,  footnote: "*"},
          {label: "11 - 16 Jahre", girl: 78.00, boy: 42.00,  footnote: "*"}
        ]
      }
    },
    methods: {

    }
  }
</script>



