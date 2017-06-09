class Hello{
  constructor(name){
    this.name = name;
    this.init();
  }

  init(){
    sayHello(this.name);
  }
  sayHello(name){
    console.log(`Hi, hello ${name}`);
    console.log(`How do you do?`);
  }
}

export default Hello;