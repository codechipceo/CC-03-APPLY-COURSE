import { Router } from 'express'
import { schoolCtrl } from './schoolCtrl.js'
const schoolRouter = Router()

schoolRouter.use("/add" , schoolCtrl.create)
schoolRouter.use("/getall" , schoolCtrl.getAll)
schoolRouter.use("/getbyid" , schoolCtrl.getById)
schoolRouter.use("/update", schoolCtrl.update)
schoolRouter.use("/delete", schoolCtrl.deleteSchool)

export  { schoolRouter}