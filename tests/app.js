// import express from 'express'
// const app = express()
const app = 'https://petstore.swagger.io/v2/swagger.json'



app.post("/user", (req, res) => {

    res.sendStatus(200)
    
})

export default app