import * as chalk from 'chalk';

/**
 * Aplicación para el procesamiento de notas de texto
 * @module Nota
 * @author Andrea Hernández Martín
 */

type color = 'Rojo' | 'Verde' | 'Azul' | 'Amarillo';

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
  constructor(private titulo: string, private cuerpo: string, private color: color) {}

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
  getColor(): color {
    return this.color;
  }

  /**
   * Método getter que accede a los datos de la nota completa
   * @returns Retorna la nota entera
   */
  getNota(): string {
    const nota: string = `Titulo: ${this.titulo}\nCuerpo: ${this.cuerpo}\nColor: ${this.color} `;
    return nota;
  }

  /**
   * Método que imprime la nota según el color
   */
  print(): void {
    switch (this.color) {
      case 'Rojo':
        console.log(chalk.red(this.getNota()));
        break;
      case 'Verde':
        console.log(chalk.green(this.getNota()));
        break;
      case 'Azul':
        console.log(chalk.blue(this.getNota()));
        break;
      case 'Amarillo':
        console.log(chalk.yellow(this.getNota()));
        break;
      default:
        break;
    }
  }
}

const myNote = new Nota('Hola', 'Mi nombre es Andrea', 'Rojo');
console.log(myNote.print());
