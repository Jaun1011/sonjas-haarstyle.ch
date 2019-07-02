<template>
  <article>

    <div class="text">
      <div>      
        <h1>Instafeed</h1>
        <iframe id="insta" src="https://embedsocial.com/api/pro_album/instagram/fa3c9a38af2373d136db01853425d6356e342db2">
        </iframe>
      </div>
    </div>

    <div class="text">
      <h1>Videos</h1>
      <iframe id="youtube" src="http://www.youtube.com/embed/p7c4BYAYd4o" width="420" height="315"> 
      </iframe>
    </div>

    
  </article>
</template>

<script>


    export default {
        name: "News",

    }
</script>

<style scoped>
  article {
    display: grid;
    grid-template-columns: auto auto;
  }

  #youtube {
    width: 95%; 
    height: 400px;
    border: none;
  }

  #insta {
    width: 100%; 
    height: 1115px;
    border: none;
  }

  @media only screen and (max-width: 700px) {
    article {
      grid-template-columns: auto;
    }
  }

</style>
