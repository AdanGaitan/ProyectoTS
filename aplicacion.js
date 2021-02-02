/* var edad:number=25, puntos:number =25;
var total:number=0;
total = edad + puntos;
console.log(total);

var nombre:string='carlitos',apellido:string='ramallo';
var completo:string=nombre+' '+apellido;
console.log(completo);
 */
/*
var esNuevo:boolean=false, desasImprimir:boolean=true;
var cancione:any=15;
 */
/*
var listadoDeNombre:Array<string>=['juan','carmen','ramoncito'];
console.log(listadoDeNombre);

interface Alumnos{
    nombre:string,
    edad:number;
}

var listadodeAlumno: Array<Alumnos>=[

{
    nombre:"maria",
    edad:15
},
{
    nombre:'ana',
    edad:95
},
{
    nombre:'johana',
    edad:54
}

]

console.log(listadodeAlumno);
 */
var cantidadSolicitado = 35;
var listadoDeUsuario = [
    {
        nombre: 'ana',
        apellido: 'gonazales'
    },
    {
        nombre: 'lupita',
        apellido: 'juarez'
    },
    {
        nombre: 'elmer',
        apellido: 'martinez'
    }
];
//console.log(listadoDeUsuario);
/* for(let usuario of listadoDeUsuario){
    console.log(usuario.apellido)
}
 */
/*
 for(let posicion in listadoDeUsuario){
    console.log(listadoDeUsuario[posicion].nombre);
 } */
//funciones
/*
 function mostrarHola(){
  
    var numero1:number=5;
    var numero2:number=7;
    var total:number=numero1+numero2;

    console.log('la suma es :'+ total)


 }
 mostrarHola();
 */
//funciones con parametros
/*  function mostrarMensaje(mensaje:string){
    console.log(mensaje);
 }

 function calcularSumna(numero1:number,numero2:number){
    var total:number=numero1+numero2;
    console.log(total)
 }
 mostrarMensaje('hola probando');
 calcularSumna(7,8); */
//funciones que nos devuelven datos
/*
 function multiplicar(numero1:number,numero2:number): number{
     var total:number=numero1 * numero2 ;

     return total;
 }

function calcularPromedio(nota1:number,nota2:number,nota3:number):number{
    var total :number=(nota1+nota2+nota3)/3
    return total
}

 var numeroResultado:number=0;

 numeroResultado=multiplicar(5,5);

 console.log(numeroResultado);

 var promedio: number =0;

 promedio=calcularPromedio(10,20,30);
 console.log(promedio); */
//clases
/*
 class Alumno{
     nombre:string;
     apelligo:string;
     edad:number;

    //metodo
    mostrarMensaje(){
        console.log('hola',this.nombre)
    }
    asignar(nombre:string,apellido:string,edad:number){
        this.nombre=nombre;
        this.apelligo=apellido;
        this.edad=edad;
    }


 }
 //fin de la clase
 var alumno1:Alumno = new Alumno();
 alumno1.asignar("juani","fatz",100);
 
/*  alumno1.nombre='juan';
 alumno1.apelligo='garmendia';
 alumno1.edad=200; */
/*
 alumno1.mostrarMensaje();


 */
//funciones anonimas
/*
 var nombre:string[]=['ana','maria','jose'];
nombre.forEach((nombre)=> {
    if(nombre =="ana"){
        console.log("hola ana")
    }

});


interface Alumno{
    nombre : string;
    apellio:string;

}

var alumnos: Alumno[]=[];

alumnos.push({ nombre:'ana',apellio:'pineda' });
alumnos.push({ nombre:'ramon',apellio:'gonzales' });
alumnos.push({ nombre:'rayuelo',apellio:'martines' });

alumnos.forEach((alumnos)=>{
    console.log(alumnos.nombre);
}) */
//metodo find
/*
interface Alumno{
    idAlumno:number;
    nombre:string;
    apellido:string;

}
var alumnos:Alumno[]=[];
alumnos.push({idAlumno:1,nombre:'carmen',apellido:'pineda'});
alumnos.push({idAlumno:2,nombre:'ricardo',apellido:'montaner'});
alumnos.push({idAlumno:3,nombre:'jack',apellido:'black'});

var alumnoEncontrado = alumnos.find((alumnos)=>{
    return alumnos.nombre.includes('j');
})

console.log(alumnoEncontrado); */ 
