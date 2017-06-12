import Hello from './src/Hello'
import GoodBye from './src/GoodBye'

(function(){
  console.log('checktool initialize...');

  new Hello('Yoko');
  new GoodBye('Taro');
})();