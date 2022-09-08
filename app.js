const express = require("express")

// import routers(s)
const activity_router = require("./routers/activity")

const app = express()

// use json body parser
app.use(express.json())

// root endpoint
app.get("/", (req,res) => {
    res.json({
        app_name: "todo app",
        current_date: new Date().toISOString()
    })
})

// use router(s)
app.use('/activity', activity_router)

module.exports = app