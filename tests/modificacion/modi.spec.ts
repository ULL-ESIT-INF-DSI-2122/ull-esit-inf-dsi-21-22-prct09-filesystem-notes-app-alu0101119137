import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../../src/modificacion/addReduce';

describe('Tests de la clase Reduce', () => {
  const addRed = new AddReduce([2, 5, 7]);
  it('Se crea correctamente la clase addReduce', () => {
    expect(new AddReduce([2, 5, 7])).to.be.not.null;
  });
  it('Se pone en funcionamiento la operacion run', () => {
    expect(addRed.run()).to.be.not.null;
  });
});
