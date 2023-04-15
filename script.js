import { openai, userInterface } from "./helpers.js"

const chatHistory = [];

const inputHandler = async input => {
    const query = {
        role: 'user',
        content: input
    };
    chatHistory.push(query);

    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: chatHistory
    })
    
    chatHistory.push(res.data.choices[0].message)
    console.log(res.data.choices[0].message.content)
    userInterface.prompt()
};

userInterface.prompt()
userInterface.on('line', inputHandler)
