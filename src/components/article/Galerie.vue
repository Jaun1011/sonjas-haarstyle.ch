<template>
  <article>
    <div class="text">
      <h1>Gallerie</h1>
      <a v-for="(image) in gallery">
        <img
          class="thumbnail"
          v-bind:src="image.thumbnail"
          v-on:click="selectPicture = image"
        />
      </a>
    </div>

    <div class="text gallery">
      <a class="button"
         v-on:click="dec(selectPicture.index)"><</a>
      <img class="gallery-pic"
           v-bind:src="selectPicture.pic"/>
      <a class="button"
         v-on:click="inc(selectPicture.index)">></a>
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
            thumbnail: "static/pic/galerie/thumbnails/" + preName + i + "_tn" + ending,
            pic: "static/pic/galerie/" + preName + i + ending,
          });
        }
        return names;
      };

      const gallery = picGen("makeup_", ".jpg", 7)
        .concat(picGen("p", ".jpg", 28))
        .map((value, index) => {
          value.index = index;
          return value;
        });

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
    }

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
    height: 25em;
    margin: auto;
  }

  .button{
    margin: auto;
    color:  #ffffff;
    border: solid 1px #ffffff;
    height: 1em;
    padding: 0.3em;
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
