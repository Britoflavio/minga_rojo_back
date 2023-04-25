/* var express = require('express'); */
import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
import chapterRouter from './chapters.js'


const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'MINGA API',
    subtitle:'endpoint of minga' });
});

router.use('/auth',userRouter)
router.use('/authors',authorRouter)
router.use('/cateogires',categoryRouter)
router.use('/companies',companyRouter)
router.use('/mangas',mangaRouter)
router.use('/chapters',chapterRouter)
export default router;

/* let endpoint = '/users'
function funcionDelEndpoint(req, res, next) {
    res.send('respond with a resource');
}    */

/* router.get('/products',(req,res,next)=>{
  return res.status(200).send('se encontraron productos para el endpoint')
})

router.get ('/carts',(req,res,next)=>res.status(200).json({
  carts:[],
  success:true
})) */

/* router.get(endpoint,funcionDelEndpoint) */

