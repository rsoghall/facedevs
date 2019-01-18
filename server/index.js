const express = require('express');
const bodyParser = require('body-parser')
// importing the controller
const cr = require('./controller')

// invoking express and using bodyParser middleware
const app = express()
app.use(bodyParser.json())



/* EndPoints Go Here */

app.get(`/api/message`, cr.getMessage)

app.post(`/api/message`, cr.addMessage)

// app.put(`/api/message`)

// app.delete(`/api/message`)




// *** This is what makes the server run *** //

app.listen(4444,()=>{
    console.log('Server is listening on... 4444');
    
})