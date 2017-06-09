class Hello{
  constructor(){
    this.init();
  }

  init(){
    console.log('hello world.'); 
  }
  sayHello(name){
    console.log(`Hello, #{name}`);
  }
}

export default Hello;