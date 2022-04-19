import 'mocha';
import {expect} from 'chai';
import {Nota} from '../../src/notas/nota';

describe('Tests de la clase Nota', () => {
  const myNote = new Nota('Hola mundo', 'Practica 9 DSI', 'Magenta');
  const myNote1 = new Nota('Hola mundo', 'Practica 9 DSI', 'Rojo');
  const myNote2 = new Nota('Hola mundo', 'Practica 9 DSI', 'Azul');
  const myNote3 = new Nota('Hola mundo', 'Practica 9 DSI', 'Verde');
  const myNote4 = new Nota('Hola mundo', 'Practica 9 DSI', 'Amarillo');
  const myNote5 = new Nota('Hola mundo', 'Practica 9 DSI', 'Cian');

  it('Se crea una clase Nota correctamente', () => {
    expect(new Nota('Hola mundo', 'Practica 9 DSI', 'Magenta')).to.be.not.null;
    expect(new Nota('Hola mundo', 'Practica 9 DSI', 'Rojo')).to.be.instanceOf(Nota);
  });
  it('Se accede al título de la nota correctamente', () => {
    expect(myNote.getTitulo()).to.be.equal('Hola mundo');
  });
  it('Se accede al cuerpo de la nota correctamente', () => {
    expect(myNote.getCuerpo()).to.be.equal('Practica 9 DSI');
  });
  it('Se accede al color de la nota correctamente', () => {
    expect(myNote.getColor()).to.be.equal('Magenta');
  });
  it('Se accede a la información completa de la nota correctamente', () => {
    expect(myNote.getNota()).to.be.equal('Titulo: Hola mundo\nCuerpo: Practica 9 DSI\nColor: Magenta');
  });
  it('Se imprime por consola la nota correctamente', () => {
    expect(myNote.print()).to.be.not.null;
    expect(myNote1.print()).to.be.not.null;
    expect(myNote2.print()).to.be.not.null;
    expect(myNote3.print()).to.be.not.null;
    expect(myNote4.print()).to.be.not.null;
    expect(myNote5.print()).to.be.not.null;
  });
});
