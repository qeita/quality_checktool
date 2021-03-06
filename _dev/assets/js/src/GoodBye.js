class GoodBye{
  constructor(name){
    this.name = name;
    this.init();
  }

  init(){
    sayGoodBye(this.name);
  }
  sayGoodBye(name){
    console.log(`Hi, GoodBye ${name}.`);
    console.log(`See you tomorrow.`);
  }
}

export default GoodBye;