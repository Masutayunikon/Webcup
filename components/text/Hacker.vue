<template>
  <span :style="{color: color}" ref="textRef">
    {{text}}
  </span>
</template>

<script setup lang="ts">

interface Props {
  color: string,
  text: string,
}

const props = defineProps<Props>();

const textRef : Ref = ref(null);

// on hover
onMounted(() => {

  const element = textRef.value as HTMLElement;
  element.addEventListener('mouseover', () => {
    let iterations = 0;
    // check if not null
    if (textRef.value === null) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let interval = setInterval(() => {
      textRef.value.innerText;
      let res = textRef.value.innerText.split("")
          .map((letter: any, index: number) => {
            if (index < iterations) {
              return props.text[index];
            }
            let choice = letters[Math.floor(Math.random() * 26)];

            // if props.text[index] is not in letters, return choice
            if (!letters.includes(props.text[index])) {
              return choice;
            }

            // if props.text[index] is minuscule, return choice.toLowerCase() else return choice
            if (props.text[index] === props.text[index].toLowerCase()) {
              return choice.toLowerCase();
            }

            // if is uppercase, return choice.toUpperCase() else return choice

            return choice;
          })
          .join("");

      // for each letter in res compare with textRef.value.innerText[index] if is not uppper change res[index] to lowercase
      // for each letter in res compare with textRef.value.innerText[index] if is not lower change res[index] to uppercase
      for(let i = 0; i < res.length; i++) {
        if (textRef.value.innerText[i] === textRef.value.innerText[i].toUpperCase()) {
          res = res.slice(0, i) + res[i].toUpperCase() + res.slice(i + 1);
        } else {
          res = res.slice(0, i) + res[i].toLowerCase() + res.slice(i + 1);
        }
      }

      textRef.value.innerText = res;

      if (iterations > props.text.length) clearInterval(interval)

      iterations += 1/3;

    }, 30);
  });

});


</script>

<style scoped lang="scss">

</style>
