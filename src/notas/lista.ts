/**
 * Aplicación para el procesamiento de notas de texto
 * @module Nota
 * @author Andrea Hernández Martín
 */

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

  getUserName(): string {
    return this.userName;
  }

  findNota(nombre: string): boolean {

  }

  addNota(nuevaNota: Nota): void {

  }

  modifyNota(nombre: string, nuevoTexto: string, nuevoColor: color): void {

  }

  deleteNota(nombre: string): void {

  }

  listarTitulos(): void {

  }

  leerNota(nombre: string): void {

  }
}
