/**
 * Aplicación para el procesamiento de notas de texto
 * @module Lista
 * @author Andrea Hernández Martín
 */

import * as chalk from "chalk";
import {existsSync, writeFile} from "fs";
import {color, Nota} from "./nota";

/**
 * Clase Lista
 */
export class Lista {
  /**
   * Constructor de la clase Lista
   * @param userName nombre del usurio
   */
  constructor(private userName: string) {}

  /**
   * Método que accede al nombre del usuario
   * @returns Retorna el nombre del usuario
   */
  getUserName(): string {
    return this.userName;
  }

  /**
   * Método que busca una nota según el nombre de esta
   * @param nombre Nombre de la nota a buscar
   * @returns Retorna verdadero si la encontró y falso en caso contrario
   */
  findNota(nombre: string): boolean {
    return (existsSync(`./${this.userName}/${nombre}.json`)) ? true : false;
  }

  /**
   * Método que añade una nueva nota
   * @param nuevaNota Nota nueva que se quiere añadir
   */
  addNota(nuevaNota: Nota): void {
    if (!this.findNota(nuevaNota.getTitulo())) {
      writeFile(`./${this.userName}/${nuevaNota.getTitulo()}.json`, `{\n${nuevaNota.getNota()}\n}`, (err) => {
        if (!err) {
          // console.log('Entra');
          console.log(chalk.default.green('Se ha añadido la nota correctamente'));
        } else {
          console.log(chalk.default.red('Se ha producido un error inesperado'));
        }
      });
    } else {
      // console.log('Entra');
      console.log(chalk.default.red('Error. Ya existe una nota con ese nombre'));
    }
  }

  /**
   * Método que modifica el contenido de una nota existente
   * @param nombre Nombre de la nota que se quiere modificar
   * @param nuevoTexto El texto a modificar
   * @param nuevoColor El color de la nota que se quiere modificar
   */
  modifyNota(nombre: string, nuevoTexto: string, nuevoColor: color): void {
    if (this.findNota(nombre)) {
      writeFile(`${this.userName}/${nombre}`, `{\n"Titulo": "${nombre}",\n"Cuerpo": "${nuevoTexto}",\n"Color": "${nuevoColor}"\n}\n}`, (err) => {
        if (!err) {
          console.log(chalk.default.green('Se ha modificado la nota correctamente'));
        } else {
          console.log(chalk.default.red('Se ha producido un error inesperado'));
        }
      });
    } else {
      console.log(chalk.default.red('Error. No existe ninguna nota con ese nombre'));
    }
  }

  deleteNota(nombre: string): void {

  }

  listarTitulos(): void {

  }

  leerNota(nombre: string): void {

  }
}
// const myNote = new Nota('Primera nota', 'Realizada por Andrea', 'Cian');
// const myList = new Lista('Andrea');
// myList.addNota(myNote);
// myList.modifyNota('Primera Nota', 'modificacion nota', 'Cian');
