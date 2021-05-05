const { argv } = require('process');
const { describe } = require('yargs');

const arv=require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        default: false,
        describe:'Muestra la tabla en consola',
        type: 'boolean'

    })
    .option('h', {
        alias: 'height',
        demandOption:true,
        describe:'Da el limite de tabla',
        type: 'number'

    })
    .check((arv,options)=>{
        if(isNaN(arv.b)){

            throw 'La base tiene que ser un número';
            
        }else{
            return true;
        }
    })
    .check((arv,options)=>{
        if(isNaN(arv.h)){

            throw 'El limite tiene que ser un número';
            
        }else{
            return true;
        }
    })
.argv;


module.exports= arv;