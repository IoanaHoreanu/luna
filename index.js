const cowsay = require('cowsay');
const information = require('./information');

console.log(cowsay.say({
  text: `Hello, ${information.nom} from ${information.campus}!`,
}));
