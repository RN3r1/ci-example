function importTest(name, path) {
  describe(name, function () {
      require(path);
  });
}

var common = require("./common");

describe("Tests de toda la aplicación", function () {

  // beforeEach(function () {
  //    console.log("Código que ejecuta antes de cada test");
  // });

  importTest("add", './add/add-test');
  importTest("divide", './divide/divide-test');
  importTest("substract", './substract/substract-test');
  importTest("multiply", './multiply/multiply-test');

  after(function () {
      console.log("Ya acabé todos los tests :)");
  });

});