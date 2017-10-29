( function( global, $ ) {

  var Greetr = function( firstname, lastname, language ) {
    return new Greetr.init( firstname, lastname, language );
  };

  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion"
  }

  Greetr.prototype = {

    fullname: function() {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.fullname + '.';
    }

  };

  Greetr.init = function( firstname, lastname, language ) {
    var self = this;
    self.firstname = firstname || "Default";
    self.lastname = lastname || "Default";
    self.language = language || "en";
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = G$ = Greetr;

}( Window, jQuery ) )
