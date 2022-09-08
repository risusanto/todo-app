// import model(s)
const {activity} = require("../models")

module.exports = {
    list: async (req,res) => {
        let is_done = req.query['is_done']
        let filter = null

        if(typeof is_done != "undefined") {
            if(is_done.toLowerCase() === "true") {
                filter = {
                    where: {
                        is_done: true
                    }
                }
            } else {
                filter = {
                    where: {
                        is_done: false
                    }
                }
            }
        }

        let activities = []
        if(filter != null) {
            activities = await activity.findAll(filter)
        } else {
            activities = await activity.findAll()
        }
        res.json(activities)
    },
    getByID: async(req,res) => {
        let id = req.params['id']
        let data = null
        try {
            data = await activity.findOne({
                where: {
                    id: id
                }
            })
        } catch (e) {
            console.log(e)
        }
        if (data === null) {
            return res.status(400).json(data)
        }

        res.json(data)
    },
    update: async (req,res) => {
        let id = req.params['id']
        let data = req.body

        try {
            await activity.update(data, {
                where: {
                    id: id
                }
            })
        } catch (e) {
            console.log(e)
            return res.status(400).json(null)
        }

       res.json(data)
    },
    create: async (req,res) => {
        let data = req.body
        if(typeof data.is_done !== "boolean") {
            data.is_done = false
        }
        try{
            data = await activity.create(data)
        } catch (e) {
            console.log(e)
            return res.status(400).json(null)
        }
        res.json(data)
    },
    delete: async (req,res) => {
        let id = req.params['id']
        try{
            await activity.destroy({
                where:{
                    id: id
                }
            })
        } catch (e) {
            console.log(e)
            return res.status(400).json({
                message: "failed"
            })
        }

        res.json({
            message: "success"
        })
    }
}