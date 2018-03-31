const moment = require('./moment');
require('./locale/th');

let now = moment();
console.log(now.format('D MMMM BBBB'));

let birthday = moment('20/4/2515', 'D/M/BBBB');
console.log(birthday.format('D MMMM BBBB'));