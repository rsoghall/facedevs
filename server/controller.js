let allMessages = [
    {
        author: 'Unknown',
        body: 'Create the highest, grandest vision possible for your life, because you become what you believe',
        index: 0
    },
    {
        author: 'Unknown',
        body: 'Whatever you want to be',
        index: 1
    },
    
    {
        author: 'The Internet',
        body: 'So, what if, instead of thinking about solving your whole life, you just think about adding additional good things. One at a time. Just let your pile of good things grow',
        index: 2
    },
]



module.exports = {
    getMessage: (req, res) => {
        console.log(allMessages)
        res.status(200).send(allMessages)

    },
    addMessage: (req, res) => {
        const index = allMessages[allMessages.length-1].index+1

        const newMessage = {
            body: req.body.text,
            author: req.body.author,
            index: index
        };

        allMessages.push(newMessage)
        res.status(200).send(allMessages)
    }
}