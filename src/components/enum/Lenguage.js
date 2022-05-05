class Lenguage {
  static ENUM = {
    ES : new Lenguage("Spanish"),
    EN : new Lenguage("English"),
  }

  constructor(name) {
    this.name = name
  }
}

export default Lenguage;