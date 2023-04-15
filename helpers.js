// ENV SUPPORT

import { config } from "dotenv";

config()

// OPENAI

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

// READLINE

import readline from 'readline';

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// EXPORTS

export {userInterface, openai}