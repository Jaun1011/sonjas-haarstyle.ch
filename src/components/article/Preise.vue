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
          <td class="price">{{woman.short}} {{prepareCurency(woman.short)}}</td>
          <td class="price">{{woman.middle}} {{prepareCurency(woman.middle)}}</td>
          <td class="price">{{woman.long}} {{prepareCurency(woman.long)}}</td>
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
          <td class="price">{{man.short}} {{prepareCurency(man.short)}}</td>
          <td class="price">{{man.middle}} {{prepareCurency(man.middle)}}</td>
          <td class="price">{{man.long}} {{prepareCurency(man.long)}}</td>
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
          <th class="price">Junge</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(child) in children">
          <td>{{child.label}}</td>
          <td class="price">{{child.girl}} {{currency}}</td>
          <td class="price">{{child.boy}} {{currency}}</td>
        </tr>
        </tbody>
      </table>
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
          <td class="price">{{cosmetic.price}} {{currency}}</td>
        </tr>
        </tbody>
      </table>
    </div>


    <div class="text line">
      Ab 30.08.2017 ist die neue Preisliste gültig.<br>
      Alle Preise sind inklusive 8% MWST.
    </div>


    <div></div>
  </article>
</template>

<style scoped>
  article {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-row: auto auto;

  }

  .first {
    grid-row: 1 / 3;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }


  thead tr {
    text-align: left;
    border-bottom: 1px solid white;
  }

  .price {
    text-align: right;
    padding-left: 1em;
  }

</style>


<script>
  export default {
    name: "Dienstleistung",
    data() {
      return {
        currency: "Chf",
        cosmetics: [
          {label: "Brauen färben", price: 22},
          {label: "Wimpern färben", price: 22},
          {label: "Brauen zupfen", price: 26},
          {label: "Tages Make - up", price: 70},
          {label: "Braut Make - up", price: 110}
        ],
        women: [
          {label: "waschen, föhnen/legen inkl. Kopfmassage", short: 43, middle: 49, long: 59},
          {label: "waschen, schneiden föhnen/legen inkl. Kopfmassage", short: 78, middle: 84, long: 92},
          {label: "schneiden, föhnen", short: 73, middle: 79, long: 88},
          {label: "nur schneiden", short: 48, middle: 54, long: 61},
          {label: "Fransen, Nacken, Kontur", short: 12, long: 54},
          {label: "Split-Ender Pro pro min", short: 1.50},
          {label: "Hochsteckfrisur", short: 80, middle: 115,},
          {label: "färben (nach Aufwand)", short: 80, middle: 94, long: 106},
          {label: "tönen (nach Aufwand)", short: 70, middle: 84, long: 96},
          {label: "Fiberplex", short: 15, middle: 20, long: 25},
          {label: "Farbpflegemittel (nach Aufwand)", short: 29, middle: 36, long: 48},
          {label: "Folienméches (nach Aufwand)", short: 80, middle: 104, long: 126},
          {label: "Haubenméches (nach Aufwand)", short: 70},
          {label: "Dauerwelle ganz (nach Aufwand)", short: 86, middle: 100, long: 122},
          {label: "Dauerwelle halb (nach Aufwand)", short: 76, middle: 90, long: 112},
        ],
        men: [
          {label: "waschen, schneiden föhnen inkl. Kopfmassage", short: 49.00, middle: 64.00, long: 78.00},
          {label: "ausputzen", short: 12.00},
          {label: "schneiden, föhnen", short: 39.00, middle: 54.00, long: 68.00},
          {label: "Maschinenschnitt, Kranz", short: 31.00, middle: 36.00, long: 41.00},
          {label: "Bart schneiden", short: 19.00},
          {label: "färben (nach Aufwand)", short: 80.00, middle: 94.00, long: 106.00},
          {label: "MenReshade Service (nach Aufwand)", short: 50.00, middle: 64.00, long: 76.00}
        ],
        children: [
          {label: "0 - 4 Jahre oder Maschinenschnitt", girl: 25.00, boy: 25.00},
          {label: "5 - 7 Jahre", girl: 45.00, boy: 36.00},
          {label: "8 - 10 Jahre", girl: 55.00, boy: 38.00},
          {label: "11 - 16 Jahre", girl: 70.00, boy: 42.00}
        ]
      }
    },
    methods: {
      prepareCurency(val) {
        return val ? this.currency : ""
      },
    }
  }
</script>



