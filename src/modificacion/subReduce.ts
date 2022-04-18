import {Reduce} from "./reduce";

/**
 * Clase SubReduce
 */
export class SubReduce extends Reduce {
  /**
   * Constructor de la clase SubReduce que hereda de Reduce
   * @param numbers Array de números a operar
   */
  protected result: number;
  constructor(protected numbers: number[]) {
    super();
    this.result = 0;
  }

  /**
   * Método que inicializa la colección de datos
   */
  protected initCollection(): void {
    this.collection = this.numbers;
  }

  /**
   * Método que realiza la operación de resta de la coleccion de datos
   */
  protected operacion() {
    this.numbers.forEach((element) => {
      this.result -= element;
    });
  }

  /**
   * Metodo que imprime el resultado de la operacion reduce
   */
  protected print(): void {
    console.log(`El resultado de SubReduce de ${this.collection} = ${this.result}`);
  }
}
