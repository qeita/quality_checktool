import Hello from './src/Hello'
import GoodBye from './src/GoodBye'

import style from '../css/style.css'

(function(){
  console.log('checktool initialize...');

  new Hello('Yoko');
  new GoodBye('Taro');
})();