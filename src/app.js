//const { emailTemplate } = require ('./js-fundation/01-template'); //importaciones de modulos de node.js
//require ('./js-fundation/02-destructuring'); //importaciones de modulos de node.js


//console.log(emailTemplate);

const id = 3
;
//const {getUserById}= require('./js-fundation/03-callbacks');
const {getUserById}= require('./js-fundation/04-arrow');

getUserById(id,  (error,usuario) =>{
if (error) {
    throw new Error(error);
}

console.log (usuario);
});
