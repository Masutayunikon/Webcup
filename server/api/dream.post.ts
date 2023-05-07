import { Configuration, OpenAIApi } from "openai";

const runtimeConfig = useRuntimeConfig();
const { OPENAI_API_KEY } = runtimeConfig;

if ( ! OPENAI_API_KEY ) {
    console.log("No OpenAI API key found. Please set the OPENAI_API_KEY environment variable.");
}

const key = OPENAI_API_KEY;


const configuration = new Configuration({
    apiKey: key,
});

const openai = new OpenAIApi(configuration);

type otherParams = {
    model: string,
    temperature: number,
    max_tokens: number,
    top_p?: number,
    frequency_penalty?: number,
    presence_penalty?: number,
    stop?: string[],
    additional_prompt?: string,
};

async function getPromptResponse(prompt : string, otherParams : otherParams, lang: string = "en") {
    const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, additional_prompt, stop } = otherParams;

    let res = {
        keywords: [],
        response: "",
        isNightmare: false,
    };


    let langPrompt  : any = {
        "en": {
            "context": "Imagine you are Onirix an AI who with dream description respond with premonitory predictions and useful information about upcoming events.",
            "json": "Give me a valid javascript json array, if in the preceding text you need more context to understand the dream give me an empty array otherwise give me an array with the keywords that you think are important to understand the dream.",
            "isNightmare": "If you think this dream is a nightmare respond me with 'true' otherwise respond me with 'false'."
        },
        "fr": {
            "context": "Imaginez que vous êtes Onirix une IA qui avec la description d'un rêve répond avec des prédictions prémonitoires et des informations utiles sur les événements à venir.",
            "json": "Donnez-moi un tableau json javascript valide, si dans le texte précédent vous avez besoin de plus de contexte pour comprendre le rêve, donnez-moi un tableau vide sinon donnez-moi un tableau avec les mots-clés que vous pensez importants pour comprendre le rêve.",
            "isNightmare": "Si vous pensez que ce rêve est un cauchemar, répondez-moi avec 'true' sinon répondez-moi avec 'false'."
        }
    }

    if (!langPrompt[lang]) {
        lang = "en";
    }



    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: langPrompt[lang].context},
            {role: "user", content: prompt}
        ]
    })

    const completion0 = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: langPrompt[lang].context},
            {role: "user", content: prompt},
            {role: "assistant", content: langPrompt[lang].isNightmare},
        ],
    })

    if (completion0?.data?.choices[0]?.message?.content) {
        let msg = completion0?.data?.choices[0]?.message?.content;
        console.log(msg, msg.toLowerCase());
        // if msg contains true set isNightmare to true and return res
        const regex = /true/gs;

        if (regex.test(msg.toLowerCase())) {
            res.isNightmare = true;
            return res;
        }
    }

    console.log(completion.data);

    if (completion?.data?.choices[0]?.message?.content) {
        let msg = completion?.data?.choices[0]?.message?.content;
        res.response = msg;
        const completion2 = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: langPrompt[lang].context},
                {role: "user", content: prompt},
                {role: "assistant", content: msg},
                {role: "user", content: "Give me a valid javascript json array, if in the preceding text you need more context to understand the dream give me an empty array otherwise give me an array with the keywords that you think are important to understand the dream."}
            ]
        })
        if (completion2?.data?.choices[0]?.message?.content) {
            // match \[.*.\] in string
            let msg2 = completion2?.data?.choices[0]?.message?.content;
            console.log(msg2);
            let regex = /\[.*\]/gs;
            let match = regex.exec(msg2);
            if (match) {
                try {
                    res.keywords = JSON.parse(match[0]);
                } catch (e) {
                    res.keywords = [];
                }
            }
        }

    }


    return res;
}

export default defineEventHandler( async (event) => {

    const params : otherParams = {
        model: "text-davinci-003",
        temperature: 0.2,
        max_tokens: 2000,
        stop: ["\n"],
        additional_prompt: "I will describe you my dream and you will interpret him in your response, here is my interpretation:\n"
    };


    const body = await readBody(event);
    const { prompt, lang } = body;

    const response : any = await getPromptResponse(prompt, params, lang);

    return response;
});