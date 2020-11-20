const db = require("../data/connection")

function find() {
    return db("event")
}

function findById(id) {
    return db("event").select("id", 
    "title", 
    "date",
    "description",
    "users_id").where({ id })
}

function findByEventId(id) {
    return db("event")
    .where({"event.users_id": id})
}


function addEvent(event) {
    return db("event")
    .insert(event)
}

function updateEvent(changes, id) {
    return db("event")
    .update(changes)
    .where({id})
    
}

function remove(id) {
	return db("event").where({ id }).delete()
}

module.exports = {
	find,
    findById,
    findByEventId,
    addEvent,
    updateEvent,
    remove,
}