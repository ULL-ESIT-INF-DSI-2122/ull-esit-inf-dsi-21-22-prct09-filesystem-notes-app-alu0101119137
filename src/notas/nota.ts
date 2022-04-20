/**
 * Aplicación para el procesamiento de notas de texto
 * @module Nota
 * @author Andrea Hernández Martín
 */
import * as chalk from 'chalk';

/**
 * Color de las notas
 * @type {color}
 */
export type color = 'Rojo' | 'Verde' | 'Azul' | 'Amarillo' | 'Magenta' | 'Cian';

/**
 * Clase Nota
 */
export class Nota {
  /**
   * Constructor de la clase Nota
   * @param titulo Nombre de la nota
   * @param cuerpo Texto escrito en la nota
   * @param color Color del texto de la nota
   */
  constructor(private titulo: string, private cuerpo: string, private color: string) {}

  /**
   * Método getter que accede al título de la nota
   * @returns Retorna el titulo de la nota
   */
  getTitulo(): string {
    return this.titulo;
  }

  /**
   * Método getter que accede al cuerpo de la nota
   * @returns Retorna el cuerpo de la nota
   */
  getCuerpo(): string {
    return this.cuerpo;
  }

  /**
   * Método getter que accede al color de la nota
   * @returns Retorna el color de la nota
   */
  getColor(): string {
    return this.color;
  }

  /**
   * Método getter que accede a los datos de la nota completa
   * @returns Retorna la nota entera
   */
  getNota(): string {
    const nota: string = `Titulo: ${this.titulo}\nCuerpo: ${this.cuerpo}\nColor: ${this.color}`;
    return nota;
  }

  /**
   * Método que imprime la nota según el color elegido
   */
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
    }
  }
}

// const myNote = new Nota('Hola', 'Mi nombre es Andrea', 'Magenta');
// myNote.print();
