/**
 * Aplicación para el procesamiento de notas de texto
 * @module Lista
 * @author Andrea Hernández Martín
 */

import * as chalk from "chalk";
import {spawn} from "child_process";
import {existsSync, readdirSync, readFile, writeFile} from "fs";
import {Nota} from "./nota";

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
          console.log(chalk.default.green('Se ha añadido la nota correctamente'));
        } else {
          console.log(chalk.default.red('Error. No se ha podido añadir la nota'));
        }
      });
    } else {
      console.log(chalk.default.red('Error. Ya existe una nota con ese nombre'));
    }
  }

  /**
   * Método que modifica el contenido de una nota existente
   * @param nombre Nombre de la nota que se quiere modificar
   * @param nuevoTexto El texto a modificar
   * @param nuevoColor El color de la nota que se quiere modificar
   */
  modifyNota(nombre: string, nuevoTexto: string, nuevoColor: string): void {
    if (this.findNota(nombre)) {
      writeFile(`./${this.userName}/${nombre}.json`, `{\n"Titulo": "${nombre}",\n"Cuerpo": "${nuevoTexto}",\n"Color": "${nuevoColor}"\n}`, (err) => {
        if (!err) {
          console.log(chalk.default.green('Se ha modificado la nota correctamente'));
        } else {
          console.log(chalk.default.red('Error. No se ha podido modificar la nota'));
        }
      });
    } else {
      console.log(chalk.default.red('Error. No existe ninguna nota con ese nombre'));
    }
  }

  /**
   * Método que elimina una nota
   * @param nombre Nombre de la nota que se quiere eliminar
   */
  deleteNota(nombre: string): void {
    if (this.findNota(nombre)) {
      spawn('rm', [`./${this.userName}/${nombre}.json`]);
      console.log(chalk.default.green('Se ha eliminado la nota correctamente'));
    } else {
      console.log(chalk.default.red('Error. No existe ninguna nota con ese nombre'));
    }
  }

  /**
   * Método que muestra por consola todas las notas que tiene un usuario
   * con su color correspondiente
   */
  listarTitulos(): void {
    if (existsSync(`./${this.userName}`)) {
      const lista = readdirSync(`./${this.userName}`);
      lista.forEach((nota) => {
        readFile(`./${this.userName}/${nota}`, (err, data) => {
          if (!err) {
            const dataJson = JSON.parse(data.toString());
            switch (dataJson.color) {
              case 'Rojo':
                console.log(chalk.default.red(dataJson.titulo));
                break;
              case 'Verde':
                console.log(chalk.default.green(dataJson.titulo));
                break;
              case 'Azul':
                console.log(chalk.default.blue(dataJson.titulo));
                break;
              case 'Amarillo':
                console.log(chalk.default.yellow(dataJson.titulo));
                break;
              case 'Magenta':
                console.log(chalk.default.magenta(dataJson.titulo));
                break;
              case 'Cian':
                console.log(chalk.default.cyan(dataJson.titulo));
                break;
              default:
                console.log(chalk.default.red('Error. Este color no está disponible'));
                break;
            }
          } else {
            console.log(chalk.default.red('Error. No se pudo leer la nota'));
          }
        });
      });
    } else {
      console.log(chalk.default.red('Error. No existen listas para este usuario'));
    }
  }

  leerNota(nombre: string): void {

  }
}
