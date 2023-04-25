let name = 'chapters'
let read = (req,res,next)=>res.status(200).render(
  'index', //nombre de la vista
  {         //objetos con los datos que necesita la vista para render   
    title:'/'+name.toUpperCase(),
    subtitle:'endpoints of authors'+name
  }       
  )

export default read