<template class="body">
  <div class="body">
    <div class="container-blob">
      <div class="blob">
        <p class="subtitle-blob">
          Cette plateforme innovante est la première du genre, permettant à quiconque
          de saisir les détails de ses rêves et ses cauchemars; et de recevoir une analyse détaillée de
          ce que cela pourrait signifier pour son avenir.
        </p>
        <div class="button-container">
          <button class="button-blob bg-royal-blue">
            ESSAYEZ ONIRIX
          </button>
        </div>
        <p class="text-blob text-golden-yellow">
          Grâce à une base de données évolutive connectée à une API, l'IA utilise
          des algorithmes avancés pour analyser chaque élément de vos rêves,
          fournissant des interprétations personnalisées pour chaque personnes.
          Avec l'Institut National des Rêves, il est désormais possible de découvrir
          le sens caché de vos rêves et de mieux comprendre votre subconscient.
        </p>
      </div>
    </div>
    <div class="bg-img" :style="{
        backgroundImage: `url('bg-img.png')`,
    }">
      <img class="image" src="~/assets/Robot.png" alt="Robot Image" />
      <div class="chat-bubble">
        <h1 class="title">
          Hey moi c’est Onirix, l’IA de tes rêves incompris !
        </h1>
        <p class="subtitle">
          Développée par L'Institut National des Rêves est un site web unique en
          son genre, vous offrant un accès à une intelligence artificielle sophistiquée
          conçue pour interpréter vos rêves et vos cauchemars.
        </p>
      </div>
    </div>
    <div class="container">
      <card-3D class="card"
              image="https://i.pinimg.com/564x/f3/91/28/f391287b9b76dd596117ff7383d895cb.jpg"
              title="I'm a title"
              description="I'm a description">

      </card-3D>
      <text-Hacker class="text" color="red" text="JE SUIS LE MEILLEUR"></text-Hacker>
      <card-Screen class="card2" image="image.jpg"></card-Screen>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  .body {
    .bg-img {
      width: 100%;
      height: 1150px;
      background-position: center;
      background-size: 130%;
      align-items: flex-end;
    }
    .image {
      position: absolute;
      padding-left: 20.2%;
      top: 90px;
      scale: 0.9;
    }
    .chat-bubble {
      align-self: center;
      background-color: whitesmoke;
      text-align: center;
      max-width: 50%;
      margin-bottom: 10%;
      margin-left: 31.5%;
      margin-top: 3%;
      position: absolute;
      border-bottom-right-radius: 25px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
    .title {
      padding: 10px;
      font-weight: bold;
      font-size: 60px;
    }
    .subtitle {
      padding-inline: 5%;
      padding-bottom: 5%;
      font-size: 16px;
    }
  }
  .container-blob {
     .blob {
      border-radius: 39% 48% 43% 48% / 47% 40% 0% 0%;;
      width: 100%;
      height: 500px;
      background: #f09;
      background-image: linear-gradient(45deg, #FCE9CF 0%, #EBA468 100%);
      position: absolute;
      top: 68%;
    }
    .subtitle-blob {
      color: rgb(20, 88, 112);
      width: 80%;
      padding-left: 20%;
      padding-top: 5%;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
    .button-container {
      padding-block: 35px;
      text-align: center;
    }
    .button-blob {
      justify-items: center;
      color: white;
      border-radius: 50px;
      padding-block: 25px;
      padding-inline: 50px;
      font-size: 22px;
    }
    .text-blob {
      font-size: 20px;
      text-align: center;
      text-align: center;
      width: 80%;
      padding-left: 20%;
    }
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    .card {
      width: 300px;
      height: 500px;
    }
    .text {
      font-size: 50px;
      font-family: "Space Mono", monospace;
      font-weight: 1000;
    }
    .card2 {
      width: 300px;
      border: 3px solid rgba(0, 0, 255, 80%);
      aspect-ratio: 10/16;
      border-radius: 25px;
    }
  }

</style>