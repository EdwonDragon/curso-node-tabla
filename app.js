

const colors = require('colors');
const {crearArchivo}=require('./helppers/multiplicar');
const arv=require('./config/yargs')
console.clear()

// const [,,argv2='base=5'] = process.argv;
// const [,base=5]= argv2.split('=');
// console.log(process.argv)

crearArchivo(arv.b,arv.l,arv.h)
.then(nombre=>console.log((`Archivo ${nombre} creado`).rainbow)  )
.catch(err=>console.log(err))