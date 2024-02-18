//--Iteraciones :crossed_swords: Pair Programming :crossed_swords:
//---Objetos
//----Declaración: 1,2,3,4.

let Coche = {
    'marca':'',
    'modelo':'',
    'matricula':''
}

let Casa = {
    'codPostal':'',
    'calle':'',
    'portal':'',
    'piso':''
}

let FullStackDeveloper = {
    'lenguajes':[''],
    'proyectos':['']
}

let Perro = {
    'nombre':'',
    'raza':'',
    'color':'',
    'edad':'' ,
    ladrar() {console.log('guau')},
    popo() {Math.random() * 3}
}
//----Lectura de propiedades: 5,6,7,8.
let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos = Concierto['grupos'];
let RGB = [Led.rojo,Led.verde,Led.azul];

//----Modificación de propiedades: 9,10,11,12.

Portatil.modelo = 'P345';
Concierto.cartelera = "Guns N' Roses";
Concierto.fecha = new Date('18 de Febrero');
Impresora.imprimiendo = {
 'nombrArchivo':'',
 'copias':'',
 'numPaginas':''
}
//--Iteraciones :crossed_swords: Pair Programming :crossed_swords:
//---Objetos
//----Declaración:13,14,15,16,17.

let Noticia = {
    'titular':'',
    'cuerpo':''
}

let Persona = {
    'nombre':'',
    'apellidos':'',
    'edad':''
}

let Avion = {
    'numPasajeros' : '',
    despegar (){console.log('despegando')},
    volar (){console.log('llegando al destino')},
    aterrizar () {console.log('aterrizando')}
}

let Paquete = {
    'contenido':['cascos', 'estuche']
}

let Pais = {
    'numHabitantes':'',
    'continente':'',
    'gentilicio':''
}
