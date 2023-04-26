import Category from './../../models/Category.js'

let read = async(req,res,next)=>{  //funcion controladora es asincrona para esperar la respuesta de mongo
                                  // utillizo sintaxis try catch para intentar allgo y catchear errores
try{
  let all = await Category.find()//utilizo el metodo find para buscar todos los recursos del modelo
  return res.status(200)
  .json({ // configuro la respuesta que tengo que enviar al front
    categories: all
  })
}catch(error){
  console.log(error)
  return res.status(400)
  .json({
    error: `ERROR!`
  })
  }

}

export default read