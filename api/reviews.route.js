import express from "express"

const router = exrpess.Router()

router.route("/").get((req,res) => res.send("hello world"))

export default router