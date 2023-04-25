/* para traer solo router en 1 paso usar {} */
import {Router} from 'express'
import read from '../controllers/authors/read.js'


let router = Router()
router.get('/',read)


export default router;


/* import express from 'express'
let router = express.Router() */




/* sintaxis basica de un endpoint */
/* router.post('/',(req,res,next)=>res.status(200).send('autor creado')) */
/* router.put('/:id',(req,res,next)=>res.status(200).send('autor modificado'))
router.delete('/:id',(req,res,next)=>res.status(200).send('autor eliminado')) */
