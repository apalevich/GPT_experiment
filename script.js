import { config } from "dotenv";
config()

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
        role: 'user',
        content: 'Okay, tell me the weather in Tbilisi for today and next 7 days. Pay more attention to how it feels depending on humidity and wind than absolute numbers'
    }]
})
.then(({data}) => console.log(data.choices[0].message.content))

