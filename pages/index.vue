<template>
  <div class="body">
    <div class="container-blob">
      <div class="blob">
        <p class="subtitle-blob">
          Cette plateforme innovante est la première du genre, permettant à quiconque
          de saisir les détails de ses rêves et ses cauchemars; et de recevoir une
          analyse détaillée de ce que cela pourrait signifier pour son présent
          et son avenir.
        </p>
        <div class="button-container">
          <a href="/chat">
            <button class="button-blob bg-royal-blue">
              ESSAYEZ ONIRIX
            </button>
          </a>
        </div>
        <p class="text-blob text-golden-yellow">
          Grâce à une base de données évolutive connectée à une API, l'IA utilise
          des algorithmes avancés pour analyser chaque élément de vos rêves,
          fournissant des interprétations personnalisées pour chaque personnes.
          Avec l'Institut National des Rêves, il est désormais possible de découvrir
          le sens caché de vos rêves et de mieux comprendre votre subconscient.
        </p>
        <h1 class="title text-royal-blue">
          Avec Onirix vous...
        </h1>
        <div>
          <div class="mx-auto px-1 sm:px-6 lg:max-w-7xl">
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
              <!-- Décodez... -->
              <div class="group relative bg-white card">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none">
                  <img src="/D_img.png" alt="Decodez" class="img object-cover object-center">
                </div>
                <div>
                  <p class="text-4xl text-royal-blue px-16">
                    Décodez
                  </p>
                </div>
              </div>
              <!-- Analysez... -->
              <div class="group relative bg-white card">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none container-img">
                  <img src="/Analysez img.png" alt="Analysez" class="img1 object-cover object-center">
                </div>
                <div>
                  <p class="text-4xl text-royal-blue px-16">
                    Analysez
                  </p>
                </div>
              </div>
              <!-- Comprenez... -->
              <div class="group relative bg-white card">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none container-img2">
                  <img src="/Comprenez img.png" alt="Comprenez" class="img2 object-cover object-center">
                </div>
                <div>
                  <p class="text-4xl text-royal-blue px-12">
                    Comprenez
                  </p>
                </div>
              </div>
              <!-- Visionnez... -->
              <div class="group relative bg-white card">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none container-img3">
                  <img src="/Visionnez img.png" alt="Visionnez" class="img3 object-cover object-center">
                </div>
                <div>
                  <p class="text-4xl text-royal-blue px-16">
                    Visionnez
                  </p>
                </div>
              </div>
              <!-- More products... -->
            </div>
          </div>
        </div>
        <!-- END OF CARDS -->
        <div class="bg-white card-container">
          <h1 class="text-golden-yellow text-3xl txt font-bold text-center py-4">
            Vos rêves et vos cauchemars !
          </h1>
          <p class="text-royal-blue text-xl text-center txt">
            Ne soyez plus dans la lune, dès aujourd'hui rêvez les pieds sur Terre
            grâce aux professionnels de la santé qui vous aideront selon l'analyse Onirix.
          </p>
          <div class="button-container">
            <a href="/institut">
              <button class="button-blob bg-royal-blue">
                Je découvre ici!
              </button>
            </a>
          </div>
        </div>
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
    <!-- <div class="container">
      <card-3D class="card"
              image="https://i.pinimg.com/564x/f3/91/28/f391287b9b76dd596117ff7383d895cb.jpg"
              title="I'm a title"
              description="I'm a description">

      </card-3D>
      <text-Hacker class="text" color="red" text="JE SUIS LE MEILLEUR"></text-Hacker>
      <card-Screen class="card2" image="image.jpg"></card-Screen>
    </div> -->
  </div>
</template>

<script setup lang="ts">

const test = async () => {
  const req = await fetch('/api/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: "I dream about space and the stars.",
    })
  })

  console.log(req)
}

</script>

<style scoped lang="scss">
  .body {
    margin-bottom: 500px;
    .discover-button {
      text-align: center;
    }
    .card-container {
      width: 64.65%;
      margin-left: 17.7%;
    }
    .txt {
      width: 80%;
      padding-left: 20%;
    }
    .container-img {
      height: 440px;
    }
    .container-img2 {
      height: 480px;
    }
    .container-img3 {
      height: 520px;
    }
    .img {
      height: 400px;
    }
    .img1 {
      height: 450px;
    }
    .img2 {
      height: 450px;
    }
    .img3 {
      height: 450px;
    }
    .card {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      &:nth-child(1) {
        margin-top: 120px;
      }
      &:nth-child(2) {
        margin-top: 80px;
      }
      &:nth-child(3) {
        margin-top: 40px;
      }
      &:nth-child(4) {
        margin-top: 0px;
      }
    }
    .bg-img {
      width: 100%;
      height: 1000px;
      background-position: center;
      background-size: 130%;
      align-items: flex-end;
      margin-bottom: 60%;
    }
    .image {
      position: absolute;
      padding-left: 20.2%;
      top: 90px;
      scale: 0.9;
    }
    .chat-bubble {
      align-self: center;
      background-color: white;
      text-align: center;
      max-width: 50%;
      margin-bottom: 10%;
      margin-left: 31.5%;
      margin-top: 2%;
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
      border-radius: 50% 50% 15% 15% / 20% 20% 20% 20%;
      width: 100%;
      height: 1500px;
      background: #FCE9CF;
      background-image: linear-gradient(45deg, #FCE9CF 0%, #EBA468 100%);
      position: absolute;
      top: 640px;
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
      width: 80%;
      padding-left: 20%;
    }
    .title {
      font-size: 60px;
      font-weight: 600;
      padding-block: 20px;
      text-align: center;
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