import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../../src/modificacion/addReduce';
import {SubReduce} from '../../src/modificacion/subReduce';


describe('Tests de la clase Reduce', () => {
  const addRed = new AddReduce([2, 5, 7]);
  const subRed = new SubReduce([2, 5, 7]);

  it('Se crea correctamente la clase addReduce', () => {
    expect(new AddReduce([2, 5, 7])).to.be.not.null;
  });
  it('Se pone en funcionamiento la operacion run', () => {
    expect(addRed.run()).to.be.not.null;
  });
  it('Se crea correctamente la clase addReduce', () => {
    expect(new SubReduce([2, 5, 7])).to.be.not.null;
  });
  it('Se pone en funcionamiento la operacion run', () => {
    expect(subRed.run()).to.be.not.null;
  });
});
