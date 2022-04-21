import 'mocha';
import {expect} from 'chai';
import {Nota} from '../../src/notas/nota';
import {Lista} from '../../src/notas/lista';

describe('Tests de la clase Lista', () => {
  const myList = new Lista('Andrea');
  const myList2 = new Lista('Emma');
  const myNote = new Nota('Mi primera nota', 'Práctica 9', 'Amarillo');
  const myNote2 = new Nota('Nota 1', 'Práctica 9 DSI', 'Magenta');
  const myNote3 = new Nota('Nota 2', 'Nota tests', 'Rojo');
  const myNote4 = new Nota('Nota 3', 'Nota tests 1', 'Cian');
  const myNote5 = new Nota('Nota 4', 'Nota error', 'Marron');
  const myNote6 = new Nota('Nota 5', 'Nota azul', 'Azul');
  const myNote7 = new Nota('Nota 6', 'Nota verde', 'Verde');

  it('Se crea correctamente una instancia de la Lista', () => {
    expect(new Lista('Andrea')).to.be.not.null;
  });
  it('Se accede al nombre del usuario de la lista correctamente', () => {
    expect(myList.getUserName()).to.be.equal('Andrea');
  });
  it('Funciona el método encontrar una nota correctamente', () => {
    expect(myList.findNota('Mi primera nota')).to.be.equal(true);
  });
  it('Funciona el método añadir una nota a la lista correctamente', () => {
    expect(myList.addNota(myNote)).to.be.not.null;
    expect(myList.addNota(myNote2)).to.be.not.null;
    expect(myList.addNota(myNote3)).to.be.not.null;
    expect(myList.addNota(myNote4)).to.be.not.null;
    expect(myList.addNota(myNote5)).to.be.not.null;
    expect(myList.addNota(myNote6)).to.be.not.null;
    expect(myList.addNota(myNote7)).to.be.not.null;
  });
  it('Funciona el método listar todos los nombres de las notas correctamente', () => {
    expect(myList.listarTitulos()).to.be.not.null;
    expect(myList2.listarTitulos()).to.be.not.null;
  });
  it('Funciona el método leer nombre y cuerpo de una nota correctamente', () => {
    expect(myList.leerNota('Mi primera nota')).to.be.not.null;
    expect(myList.leerNota('Nota 1')).to.be.not.null;
    expect(myList.leerNota('Nota')).to.be.not.null;
  });
  it('Funciona el método modificar una nota de la lista correctamente', () => {
    expect(myList.modifyNota('Nota 1', 'Nota modificada', 'Azul')).to.be.not.null;
    expect(myList.modifyNota('Nota', 'Nota no existe', 'Verde')).to.be.not.null;
  });
  it('Funciona el método eliminar una nota de la lista correctamente', () => {
    expect(myList.deleteNota('Nota 2')).to.be.not.null;
    expect(myList.deleteNota('Nota')).to.be.not.null;
  });
});
