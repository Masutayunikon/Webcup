<template class="body">
  <div class="body">
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
    background-color: rgba(20, 88, 112, 0.3);
  }
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
  }
</style>