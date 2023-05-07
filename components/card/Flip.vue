<template>
  <div class="main">
    <div ref="card" class="card" @click="flip">
      <div class="front">

      </div>
      <div class="back">
        <img v-if="image" :src="image">
        <span v-if="text">{{ text }}</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

const card : Ref = ref(null);

interface Props {
  image?: string
  text?: string
}

defineProps<Props>();

const flip = () => {
  // transform: rotateY(180deg);
  card.value.style.transform = "rotateY(180deg)";
}


</script>

<style scoped lang="scss">

.main {
  position: relative;
  min-width: 300px;
  max-width: 300px;
  height: 80vh;
  max-height: 500px;
  border-radius: 25px;
  overflow: hidden;

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;

  }

  .front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: url("/logo.png");
    color: #333;
    background-size: cover;
    background-position: center;

  }


  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: var(--tertiary);
    border: 5px solid var(--primary);
    color: #333;
    transform: rotateY(180deg);
    img {
      object-fit: cover;
      width: 100%;
      height: 80%;
    }
    span {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.5rem;
    }
  }



}

</style>