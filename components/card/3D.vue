<template>
  <div class="card" ref="card">
    <div class="content-card" ref="content">
      <img v-if="image" :style="{height: title || description ? '60%' : '100%'}" :src="image" alt="..."/>
      <div v-if="description || title" class="text">
        <h1 v-if="title">{{title}}</h1>
        <h5 v-if="description">{{description}}</h5>
      </div>
    </div>
    <div class="glow" ref="glow">

    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  title?: string
  description?: string
  image?: string
}

defineProps<Props>();

const card : Ref = ref(null);
const content : Ref = ref(null);
const glow : Ref = ref(null);

onMounted(() => {
  card.value.addEventListener('mousemove', (e) => {
    const rect = card.value.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleY = (x - centerX) / 8;
    const angleX = (y - centerY) / 8;

    const glowX = x / rect.width * 100;
    const glowY = y / rect.height * 100;

    content.value.style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    glow.value.style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    glow.value.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, #ffffff, transparent)`

  });

  card.value.addEventListener('mouseleave', () => {
    content.value.style.transform = `rotateY(0deg) rotateX(0deg)`;
    glow.value.style.transform = `rotateX(0deg) rotateY(0deg)`;

  });
});

</script>

<style scoped lang="scss">

.card {
  &:hover {
    cursor: pointer;
    z-index: 10;
  }
  perspective: 1000px;
  .content-card {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 25px;
    transition: all 0.15s ease-out;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .text {
      text-align: center;
      padding: 1rem;
      width: 100%;
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      h5 {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    transition: all 0.15s ease-out;
    border-radius: 25px;
    mix-blend-mode: hard-light;
    background: radial-gradient(circle at 50% 0%, #ffffff, transparent);
  }
}

</style>