# Práctica 9. Aplicación de procesamiento de notas de texto
### Desarrollo de Sistemas Informáticos
### Andrea Hernández Martín - alu0101119137
[Enlace a la Github Page](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101119137/)

## Introducción  
En esta práctica realizaremos un ejercicio en Typescript en el cual aprenderemos a manejar sobre todo los sistemas de ficheros, así como el uso de los paquetes *yargs* y *chalk*. Además, utilizaremos TypeDoc para documentar el desarrollo del código implementado, así como las herramientas Mocha y Chai para incorporar desarrollo dirigipo por pruebas (TDD) o por comportamiento (BDD). Además se utilizarán las herramientas Instanbul y Coveralls para el cubrimiento del código, y se ha añadido la herramienta Sonar Cloud la cual evalua el estado del código y comprueba que el código sea limpio y seguro, las cuales se utilizan mediante Gihub Actions. También se ha añadido Github Actions para la intedración continua del código fuente. Y a la hora de realizar la estructura del código se seguirán los principios SOLID.


## Procesamiento de notas de texto
En este ejercicio se nos pide implementar una aplicación que procese notas de texto con un color deseado para un usuario concreto, de manera que el usuario podrá añadir, modificar, ver todas las notas, etc. Para realizar dicha práctica, se tiene que utilizar el paquete yargs para el uso del usuario por consola y el paquete chalk para enseñar las notas con los colores deseados.  

A la hora de llevar a cabo la aplicación, he creado dos clases, **Nota** y **Lista**, las cuales se comentarán a continuación. Para poder pasarle al programa mediante la consola los datos necesarios para su uso, se ha utilizado el paquete yargs el cual he implementado en un fichero aparte llamado `app` y será el encargado de poner en funcionamiento la aplicación.  

- **Clase Nota:** esta clase es una clase sencilla y es la encargada de describir y almacenar los datos necesarios de una nota. Para ello, la nota recibe en el constructor su nombre, el texto con el contenido de la nota y el color con el que se quiere mostrar la nota por pantalla. Además implementa varios métodos los cuales son los `getters` de sus atributos, es decir, un getter para el nombre, otro para el texto y otro para el color. También se implementa otro método `getNota` que lo que hace es devolver un string con el contenido entero de la nota, indicando el título, el cuerpo y el color de esta. Por útlimo, tiene un método `print` que muestra la nota con su color correspondiente.  
**Código:**
```ts
export class Nota {
  constructor(private titulo: string, private cuerpo: string, private color: string) {}
  getTitulo(): string {
    return this.titulo;
  }
  getCuerpo(): string {
    return this.cuerpo;
  }
  getColor(): string {
    return this.color;
  }
  getNota(): string {
    const nota: string = `"Titulo": "${this.titulo}",\n"Cuerpo": "${this.cuerpo}",\n"Color": "${this.color}"`;
    return nota;
  }
  print(): void {
    switch (this.color) {
      case 'Rojo':
        console.log(chalk.default.red(this.getNota()));
        break;
      case 'Verde':
        console.log(chalk.default.green(this.getNota()));
        break;
      case 'Azul':
        console.log(chalk.default.blue(this.getNota()));
        break;
      case 'Amarillo':
        console.log(chalk.default.yellow(this.getNota()));
        break;
      case 'Magenta':
        console.log(chalk.default.magenta(this.getNota()));
        break;
      case 'Cian':
        console.log(chalk.default.cyan(this.getNota()));
        break;
      default:
        console.log(chalk.default.red('Error. Este color no está disponible'));
        break;
    }
  }
}
```
- **Clase Lista:** 

## Documentación TypeDoc  
Para la documentación de los ejercicios utilicé la herramienta TypeDoc que convierte los comentarios en el código fuente de TypeScript en documentación HTML renderizada. A continuación, adjunto el enlace a la página web creada mediante TypeDoc.  
[Enlace repositorio documentacion Typedoc](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101119137/tree/main/docs)  

## Testing
Para la realización del testing de los ejercicios utilicé las herramientas Mocha y Chai.  
  
He realizado pruebas sobre todos los ejercicios en los cuales compruebo que los valores pasados por parámetro dan el resultado esperado o al contrario, es decir, se comprueba que no dan el resultado esperado. Para ello he creado un fichero ejercicio-n.spec.ts por cada ejercicio y he añadido algunas pruebas de todas las funciones utilizadas.  

A continuación muestro la salida en la terminal al ejecutar el test.  
```
Tests de la clase Lista
    ✔ Se crea correctamente una instancia de la Lista
    ✔ Se accede al nombre del usuario de la lista correctamente
    ✔ Funciona el método encontrar una nota correctamente
    ✔ Funciona el método añadir una nota a la lista correctamente
    ✔ Funciona el método listar todos los nombres de las notas correctamente
    ✔ Funciona el método leer nombre y cuerpo de una nota correctamente
    ✔ Funciona el método modificar una nota de la lista correctamente
    ✔ Funciona el método eliminar una nota de la lista correctamente

  Tests de la clase Nota
    ✔ Se crea una clase Nota correctamente
    ✔ Se accede al título de la nota correctamente
    ✔ Se accede al cuerpo de la nota correctamente
    ✔ Se accede al color de la nota correctamente
    ✔ Se accede a la información completa de la nota correctamente
    ✔ Se imprime por consola la nota correctamente

  18 passing (74ms)
```

## Configuración de Coveralls y Github Actions  

## Conclusiones  
Esta práctica me ha resultado bastante sencilla e interesante, debido a que he aprendido a utilizar el paquete yargs con el que no había trabajado nunca y me pareció bastante útil, además al utilizar el paquete chalk para los colores de la nota me pareció muy interesante y una forma nueva de ver los datos de la consola de manera más bonita. La parte que me resultó más compleja fue la parte de cómo leer de un directorio todas las notas que habían, pero supe realizarla buscando en la documentación de Nodejs. En cuanto a la parte de documentación y testing al haberla realizado en todas las prácticas anteriores no me ha supuesto ningún inconveniente. Al igual que coveralls y sonarcloud, las cuales se han realizado con las github actions.  

## Bibliografía  
- [Guión de la práctica]()
- [Documentación TypeDoc](https://typedoc.org/)
- [Documentación Mocha](https://mochajs.org/)
- [Documentación Chai](https://www.chaijs.com/)
- [Documentación Instanbul](https://istanbul.js.org/)
- [Documentación Coveralls](https://coveralls.io/)
- [Sonar Cloud](https://sonarcloud.io/)
- [Documentación Yargs](https://www.npmjs.com/package/yargs)
- [Documentación Chalk](https://www.npmjs.com/package/chalk)
- [Node.js](https://nodejs.org/docs/latest-v17.x/api/)
- [Apuntes de clase sobre node.js.](https://ull-esit-inf-dsi-2122.github.io/nodejs-theory/nodejs-intro.html)
- [Apuntes de clase sobre el sistema de ficheros](https://ull-esit-inf-dsi-2122.github.io/nodejs-theory/nodejs-filesystem.html)