/**
 * Teria como usar extends? 
 * https://medium.com/frontend-canteen/simplify-your-object-with-state-pattern-in-javascript-8674ff46edb1
 * 
 */


class Stoplight {
  constructor() {
    this.redLight = new RedLight(this);
    this.orangeLight = new OrangeLight(this);
    this.greenLight = new GreenLight(this);
    this.blueLight = new BlueLight(this);
    this.currentState = this.redLight;
    this.currentState.setState()
  }

  setState(newState) {
    this.currentState = newState;
    this.currentState.setState();
  }
}

class RedLight {
  constructor(light) {
    this.light = light;
  }

  setState() {
    console.log("RED")
    document.getElementsByClassName("red")[0].style.backgroundColor = "red";
    setTimeout(() => {
      document.getElementsByClassName("red")[0].style.backgroundColor =
        "#460000";
      this.light.setState(this.light.greenLight);
    }, 5000);
  }
}

class GreenLight {
  constructor(light) {
    this.light = light;
  }

  setState() {
    console.log("GREEN")
    document.getElementsByClassName("green")[0].style.backgroundColor = "green";
    setTimeout(() => {
      document.getElementsByClassName("green")[0].style.backgroundColor =
        "#00300c";
      this.light.setState(this.light.orangeLight);
    }, 3000);
  }
}

class OrangeLight {
  constructor(light) {
    this.light = light;
  }

  setState() {
    console.log("ORANGE")
    document.getElementsByClassName("orange")[0].style.backgroundColor = "orange";
    setTimeout(() => {
      document.getElementsByClassName("orange")[0].style.backgroundColor =
        "#462800";
    //   this.light.setState(this.light.redLight);
      this.light.setState(this.light.blueLight);
    }, 1000);
  }
}


class BlueLight {
  constructor(light) {
    this.light = light;
  }

  setState() {
    console.log("BLUE")
    document.getElementsByClassName("blue")[0].style.backgroundColor = "blue";
    setTimeout(() => {
      document.getElementsByClassName("blue")[0].style.backgroundColor =
        "#000730";
      this.light.setState(this.light.redLight);
    }, 1000);
  }
}



const stoplight = new Stoplight();