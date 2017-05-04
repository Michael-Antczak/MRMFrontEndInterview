class Greeting {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    throw new Error('I don\'t know how to speak!')
  }
}

// Add your new classes here
export class English extends Greeting {

  constructor(name) {
        super(name);
    }

  sayHello() {
    var hello = 'Hello ' + this.name;
    return hello;
  
  }

}

export class French extends Greeting {

   constructor(name) {
        super(name);
    }

  sayHello() {
    var hello = 'Bonjour ' + this.name;
    return hello;
  
  }

}

export class Spanish extends Greeting {

  constructor(name) {
        super(name);
    }

  sayHello() {
    var hello = 'Hola ' + this.name;
    return hello;
  
  }

}
