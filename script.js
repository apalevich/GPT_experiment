import { openai, userInterface } from "./helpers.js"

const inputHandler = async input => {
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: 'user',
            content: input
        }]
    })
    console.log(res.data.choices[0].message.content)
    userInterface.prompt()
};

userInterface.prompt()
userInterface.on('line', inputHandler)
