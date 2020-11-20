const express = require("express")
const db = require("./event-model")
const restrict = require("../user/users-middleware");

const router = express.Router()

//GET all events
router.get("/api/event",restrict(), async (req, res, next) => {
	try {
        res.json(await db.find())
	} catch(err) {
		next(err)
	}
})

//GET a event by id
router.get("/api/event/:id",restrict(), async (req, res, next) => {
	try {
		const event = await db.findById(req.params.id)
		if (!event) {
			return res.status(404).json({
				message: "event not found",
			})
		}

		res.json(stori)
	} catch(err) {
		next(err)
	}
})

//GET events by user id
router.get("/api/event/:id/event",restrict(), async (req, res, next) => {
	try {
		const event = await db.findByEventId(req.params.id)
		if (!event) {
			return res.status(404).json({
				message: "user event not found",
			})
		}

		res.json(event)
	} catch(err) {
		next(err)
	}
})

//Post
router.post("/api/event/:id/event",restrict(), async (req, res, next) => {
	try {
        const event = await db.addEvent(req.body)
        res.status(201).json(event)
        
	} catch(err) {
		next(err)
	}
})

//PUT
router.put("/api/event/:id",restrict(), async (req, res, next) => {
	try {
		const {id} = req.params
		const newEvent = { ...req.body }

		const event = await db.updateEvent(newEvent, id)
		
        res.status(201).json(event)
        
	} catch(err) {
		next(err)
	}
})

//delete
router.delete("/api/event/:id",restrict(), async (req, res, next) => {
	try {
		const { id } = req.params
		
		await db.remove(id)

		res.status(204).end()
	} catch(err) {
		next(err)
	}
})
module.exports = router;