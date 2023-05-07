<template>
  <span>
    {{textRef}}
  </span>
</template>

<script lang="ts" setup>


interface Props {
  text: string,
}

const props = defineProps<Props>();

const textRef : Ref = ref(props.text);

let intervalId: string | number | NodeJS.Timer | null | undefined = null;

// on mount launch setinterval
onMounted(() => {
  intervalId = setInterval(() => {
    // if the last 3 letter is ... remove it
    if (textRef.value.slice(-3) === "...") {
      textRef.value = textRef.value.slice(0, -3);
    } else {
      textRef.value += ".";
    }
  }, 500);
})

// on unmount clear interval

onUnmounted(() => {
  clearInterval(intervalId);
})

</script>

<style scoped lang="scss">

</style>