// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(
      `Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}.`
    );
  }
}

let persona = new Persona("Federico", 34, "hombre");

persona.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log(
      `Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}. Estoy estudiando ${this.curso} en el grupo ${this.grupo}.`
    );
  }
}

let estudiante = new Estudiante(
  "Tomás",
  25,
  "hombre",
  "Full Stack Developer",
  "Full Time"
);

estudiante.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(
      `Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}. Soy profesor de ${this.asignatura} y mi nivel es ${this.nivel}.`
    );
  }
}

let profesor = new Profesor(
  "Sofia",
  22,
  "mujer",
  "Full Stack Developer",
  "Lead instructor"
);

profesor.asignar();
