
const colors = require('colors');
const fs= require('fs');


const crearArchivo=async(base=5,listar,limite)=>{

  try{
    
   
    let salida, archivo='';
    
    for(let i=1; i<=limite; i++){
        salida+=colors.blue(base)+colors.cyan('x')+ colors.dim(i) +colors.zebra('=') + colors.blue(base*i) + '\n';
        archivo+=`${base} x ${i} = + ${base*i}\n`;
     }


    fs.writeFileSync(`./salida/tabla-${base}.txt`,archivo);

    if(listar){ 
    console.log('======================='.random)
    console.log(`Tabla del ${base}`.white)
    console.log('======================='.green)
    console.log(salida)
    }
    
    return(`Tabla-${base}.txt`)


  }catch(e){
    throw e;
  }
  
     
     
}


module.exports={
    crearArchivo
};