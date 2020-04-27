<template>
  <article>
    <div class="text">
      <h1>Gallerie</h1>
      <a v-for="(image) in gallery">
        <img
          class="thumbnail"
          v-bind:src="'static/pic/gallerie/thumbnail/' + image.src"
          v-on:click="selectPicture = image"
        />
      </a>

    </div>

    <div class="text gallery">
      <a class="button"
         v-on:click="dec(selectPicture.index)"><</a>
      <img class="gallery-pic" v-bind:src="'static/pic/gallerie/pics/' + selectPicture.src"/>
      <a class="button" v-on:click="inc(selectPicture.index)">></a>
    </div>


  </article>
</template>

<script>


  export default {
    name: "Galerie",

    data() {
      const picGen = (preName, ending, number) => {
        let names = [];
        for (let i = 1; i <= number; i++) {
          names.push({
            src:  preName + i + ending
          });
        }
        return names;
      };

      const gallery = [
        {prename: "herr", amount:4 },
        {prename: "hochsteckfrisur", amount:11},
        {prename: "kinderschminken", amount:4},
        {prename: "kurzhaar", amount:5},
        {prename: "langhaar", amount:12},
        {prename: "make-up", amount:17},
      ]
        .map(val => picGen(val.prename, ".jpg", val.amount))
        .reduce((a,b) => a.concat(b))
        .map((value, index) => {
          value.index = index;
          return value;
        });

        console.log(gallery)

      return {
        gallery: gallery,
        selectPicture: gallery[0]
      }
    },
    methods: {
      dec(index) {
        if (index === 0) {
          index = this.gallery.length - 1;
        } else {
          index--;
        }
        this.selectPicture = this.gallery[index];
      },

      inc(index) {
        if (index === this.gallery.length - 1) {
          index = 0;
        } else {
          index++;
        }
        this.selectPicture = this.gallery[index];
      }
    },
  }
</script>

<style scoped>
  article {
    display: grid;
    grid-template-columns: 25% auto;
  }

  .gallery {
    display: grid;
    grid-template-columns: auto 1fr auto;

  }

  .gallery-pic {
    display: block;
    max-height: 25em;

    width: auto;
    max-width: 80%;

    margin: auto;
  }

  @media only screen and (max-width: 900px) {
    article {
      grid-template-columns: auto;
    }
  }

  .button{
    margin: auto;
    color:  #ffffff;
    border: solid 1px #ffffff;
    padding: 2em 0.3em;

  }
  .button:hover{
    color:  #e80bc5;
    border: solid 1px #e80bc5;
  }

  .thumbnail {
    padding: 1px;
    width: 2em;
    border: solid 1px #1b1b1b;
  }

  .thumbnail:hover {
    border: solid 1px #e80bc5;
  }
</style>
