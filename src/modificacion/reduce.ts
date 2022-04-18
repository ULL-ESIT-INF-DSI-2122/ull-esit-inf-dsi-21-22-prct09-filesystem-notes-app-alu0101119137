/**
 * Clase abstracta Reduce
 */
export abstract class Reduce {
  /**
   * Constructor de la clase Reduce
   * @param collection arrat de números a operar
   */
  protected collection: number[];
  constructor() {
    this.collection = [];
  }

  /**
   * Método que establece los pasos y operaciones comunes
   */
  public run() {
    // Se inicializa la colección
    this.initCollection();

    // Hook
    this.afterInitialisation();

    // Se realiza la operación
    this.operacion();

    // Hook
    this.afterOperacion();

    // Se imprime el resultado
    this.print();

    // Hook
    this.afterPrint();
  }

  /**
   * Método abstracto que se debe definir en las clases hijas y que inicializa la coleccion de datos
   */
  protected abstract initCollection(): void;

  /**
   * Método abstracto que se debe definir en las clases hijas y que opera sobre la coleccion de datos
   */
  protected abstract operacion(): void;

  /**
   * Método abstracto que se debe definir en las clases hijas y que imprime el resultado
   */
  protected abstract print(): void;

  /**
   * Método hook que representan pasos u operaciones opcionales
   */
  protected afterInitialisation() {}

  /**
   * Método hook que representan pasos u operaciones opcionales
   */
  protected afterOperacion() {}

  /**
   * Método hook que representan pasos u operaciones opcionales
   */
  protected afterPrint() {}
}
