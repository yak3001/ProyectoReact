import logo from '../media/logo.jpg';
//ARRAY DE PRODUCTOS
const items = [
    { id: '1', categoría: 'Paquete', título: 'Básico', precio: 3899, pic: {logo} },
    { id: '2', categoría: 'Paquete', título: 'Intermedio', precio: 5999, pic: {logo} },
    { id: '3', categoría: 'Paquete', título: 'Avanzado', precio: 7799, pic: {logo} },
    { id: '4', categoría: 'Paquete', título: 'Premium', precio: 9899, pic: {logo} },
    { id: '5', categoría: 'Servicio', título: 'Imagen', precio: 3000, pic: {logo} },
    { id: '6', categoría: 'Servicio', título: 'Contenido', precio: 3000, pic: {logo} },
    { id: '7', categoría: 'Servicio', título: 'Web', precio: 6799, pic: {logo} }
]

//PROMESA

export const getFetch = new Promise((resolve, reject) => {
let condition = true;
//Tiempo para simular retraso
if (condition) {
    setTimeout(() => {resolve(items)}, 3000);
}
else {
    reject('rechazo')
}
});

