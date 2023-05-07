<template>
  <div class="container">
    <card-3D class="card"
             image="https://i.pinimg.com/564x/f3/91/28/f391287b9b76dd596117ff7383d895cb.jpg"
             title="I'm a title"
             description="I'm a description">

    </card-3D>
    <text-Hacker class="text" color="red" text="JE SUIS LE MEILLEUR"></text-Hacker>
    <card-Screen class="card2" image="image.jpg"></card-Screen>
    <card-Flip class="card3"></card-Flip>
    <button @click="test">test</button>
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 100px;

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
    .card3 {
      opacity: 0;
      transition: opacity 1s ease;
    }

    .card3.show {
      opacity: 1;
    }
  }
</style>