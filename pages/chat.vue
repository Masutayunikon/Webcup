<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <label for="language">{{languageText[language].select_language}}</label>
      <select v-model="language" id="language">
        <option value="fr">🇫🇷</option> <!-- French flag emoji -->
        <option value="en">🇺🇸</option> <!-- US flag emoji -->
      </select>
    </div>
    <div class="prompt">
      <div class="ia_text">
        <text-Hacker v-for="word in ia_text_array" color="black" :text="word"/>
      </div>
      <textarea  ref="textarea" @input="textAreaAdjust" type="text" v-model="prompt" />
      <button @click="send" :disabled="loading || !prompt.length">{{languageText[language].send}}</button>
    </div>
    <span ref="response" v-if="(isNighmare || text) && !loading" class="response">{{isNighmare ? languageText[language].isNighmare : text}}</span>
    <div class="turn_all" v-if="wordArray && !loading && wordArray.length">
      <button @click="flipAll">{{languageText[language].click_to_turn_or_turn_all}}</button>
    </div>

    <div v-if="isNighmare" class="turn_all">
      <img src="/drgoogle-great.png" alt="..."/>
    </div>

    <div v-if="wordArray && !loading" class="cards">
      <div v-for="word in wordArray" class="">
        <card-Flip class="card3" :text="word" :image="getImageUrl(word)"></card-Flip>
      </div>
    </div>
    <div v-if="loading" class="loader">
      <div class="take_coffee">
        <span>{{languageText[language].take_a_coffee}}</span>
        <img src="/hot-coffee-cup-file-free-png.png" alt="...">
      </div>
      <text-doted class="loading_text" :text="languageText[language].ai_is_thinking"/>
      <div class="take_coffee coffee2">
        <span>{{languageText[language].take_a_coffee}}</span>
        <img src="/hot-coffee-cup-file-free-png.png" alt="...">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

let wordArray = [];
const text : Ref = ref('');
const textarea : Ref = ref(null);
const prompt : Ref = ref('');
const loading : Ref = ref(false);
const wrapper : Ref = ref(null);
const response : Ref = ref(null);
const isNighmare : Ref = ref(false);
const language : Ref = ref('fr');

const languageText : any = {
  fr: {
    select_language: "Sélectionnez la langue:",
    presentation: "Bonjour, je suis Onirix, une IA capable d'interpréter les descriptions de rêves et de fournir des prédictions prémonitoires et des informations utiles sur les événements à venir. Veuillez partager la description de votre rêve, et je ferai de mon mieux pour vous offrir des idées et des prédictions basées sur les informations que vous fournirez.",
    send: "envoyer",
    take_a_coffee: "Prendre un café",
    ai_is_thinking: "L'IA réfléchit...",
    click_to_turn_or_turn_all: "Cliquez pour tourner ou tourner tout",
    tell_me_your_dream: "Racontez-moi votre rêve",
    isNighmare: "Cher utilisateur, il semble que vous ayez fait un cauchemar et que vous pourriez avoir besoin de consulter un médecin si cela vous a causé du tort. Prenez soin de vous et n'hésitez pas à demander de l'aide si nécessaire."
  },
  en: {
    select_language: "Select Language:",
    presentation: "Greetings, I am Onirix, an AI with the ability to interpret dream descriptions and provide premonitory predictions and useful information about upcoming events. Please share your dream description, and I'll do my best to offer insights and predictions based on the information you provide.",
    send: "send",
    take_a_coffee: "Take a coffee",
    ai_is_thinking: "AI is thinking...",
    click_to_turn_or_turn_all: "Click to turn or turn all",
    tell_me_your_dream: "Tell me your dream",
    isNighmare: "Dear user, it seems that you had a nightmare and you might need to see a doctor if it has caused you harm. Take care of yourself and don't hesitate to seek help if needed."
  }
}

const getImageUrl = (word) => {
  return `https://source.unsplash.com/1920x1080/?${encodeURI(word)}`
}

const flipAll = () => {
  const cards = document.getElementsByClassName('card3');

  const flip = (elem) => {
    elem.children[0].click();
    scrollToEnd(elem);
  }

  const scrollToEnd = (elem) => {
    elem.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  let index = 0;

  const flipInterval = setInterval(() => {
    if (index < cards.length) {
      flip(cards[index]);
      index++;
    } else {
      clearInterval(flipInterval);
    }
  }, 1000);
};

const textAreaAdjust = () => {
  textarea.value.style.height = "1px";
  textarea.value.style.height = (25+textarea.value.scrollHeight)+"px";
}


const ia_text = "Greetings, I am Onirix, an AI with the ability to interpret dream descriptions and provide premonitory predictions and useful information about upcoming events. Please share your dream description, and I'll do my best to offer insights and predictions based on the information you provide.";
const ia_text_array : Ref = ref(languageText[language.value].presentation.split(' '));

const send = async () => {
  loading.value = true;
  isNighmare.value = false;
  const req = await fetch('/api/dream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: prompt.value,
      lang: 'fr',
    })
  })

  const res = await req.json();

  wordArray = res.keywords;
  text.value = res.response;
  isNighmare.value = res.isNightmare;
  loading.value = false;

  if (!wordArray.length) {
    setTimeout(() => {
      wrapper.value.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 1000)
  } else {
    setTimeout(() => {
      response.value.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 1000);
  }
}

// Create watcher in language
watch(language, (newValue, oldValue) => {
  ia_text_array.value = languageText[newValue].presentation.split(' ');
})


</script>

<style scoped lang="scss">

.ia_text {
  font-size: 25px;
  padding: 2rem;
  justify-content: center;
  font-family: "Space Mono", monospace;
  font-weight: bolder;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
}

.wrapper {
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 5vw;

  .turn_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background-color: var(--tertiary);
      width: 100%;
      max-width: 300px;
      border-radius: 25px;
      margin-bottom: 20px;
      background-color: var(--tertiary);
      &:hover {
        background-color: #7a9351;
      }
      &:disabled {
        background-color: #777474;
      }
    }
  }

  .prompt {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    margin-bottom: 20px;

    textarea {
      padding: 10px;
      width: 80%;
      border-radius: 25px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      text-align: center;
    }

    button {
      background-color: var(--tertiary);
      width: 100%;
      max-width: 300px;
      border-radius: 25px;
      &:hover {
        background-color: #7a9351;
      }
      &:disabled {
        background-color: #777474;
      }
    }
  }

  .loader {
    width: 100%;
    height: 100%;
    min-height: 30vh;
    span {
      z-index: 50;
      position: relative;
      font-size: 25px;
      font-family: "Space Mono", monospace;
      font-weight: bolder;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .take_coffee {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      position: relative;
      transition: all 0.5s ease-in-out;
      animation: take_coffee_anim 10s infinite cubic-bezier(0.165, 0.6, 0.6, 0.165);
      img {
        width: 100px;
        height: 100px;
      }
      .loading_text {
        text-align: center;
        font-size: 15px;
        font-weight: bolder;
      }
    }

    .coffee2 {
      left: 200%;
      animation: take_coffee_anim2 10s infinite cubic-bezier(0.165, 0.6, 0.6, 0.165);
    }

    @keyframes take_coffee_anim2 {
      0% {
        left: 200%;
      }
      50% {
        left: -100%;
      }
      100% {
        left: 200%;
      }
    }



    @keyframes take_coffee_anim {
      0% {
        left: -100%;
      }
      50% {
        left: 200%;
      }
      100% {
        left: -100%;
      }
    }
  }

  .response {
    font-size: 25px;
    padding: 2rem;
    font-family: "Space Mono", monospace;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 500px) {
      font-size: 15px;
    }
  }
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .card {
      min-width: 100px;
      max-width: 300px;
      border: 3px solid rgba(0, 0, 255, 80%);
      aspect-ratio: 10/16;
      border-radius: 25px;
    }
  }
}

</style>