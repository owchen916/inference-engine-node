const describe = require('mocha').describe;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should();

const ie = require('../lib/ie');

describe('Network Test', function() {
  let network;
  before(async () => {
    const model_path = './models/squeezenet1.1/FP16/squeezenet1.1.xml';
    const weights_path = './models/squeezenet1.1/FP16/squeezenet1.1.bin';
    const core = ie.createCore();
    network = await core.readNetwork(model_path, weights_path);
  });

  it('getName should be a function', () => {
    expect(network.getName).to.be.a('function');
  });

  it('getName should return a string', () => {
    expect(network.getName()).to.be.a('string');
  });

  it('network name should be squeezenet1.1', () => {
    expect(network.getName()).to.equal('squeezenet1.1');
  });

  it('getName should throw for invalid argument', () => {
    expect(() => network.getName(1)).to.throw(TypeError);
  });

  it('getInputsInfo should be a function', () => {
    expect(network.getInputsInfo).to.be.a('function');
  });

  it('getInputsInfo should return an array', () => {
    expect(network.getInputsInfo()).to.be.a('array');
  });

  it('input info array length should be 1', () => {
    expect(network.getInputsInfo()).to.be.lengthOf(1);
  });

  it('input info array should contain InputInfo objects', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo).to.be.a('InputInfo');
  });

  it('InputInfo.name should be a function', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.name).to.be.a('function');
  });

  it('InputInfo.name should return a string named "data"', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.name()).to.be.a('string').equal('data');
  });

  it('InputInfo.name should throw for invalid argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.name(1)).to.throw(TypeError);
  });

  it('InputInfo.getPrecision should be a function', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.getPrecision).to.be.a('function');
  });

  it('InputInfo.getPrecision should return a string named "fp32"', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.getPrecision()).to.be.a('string').equal('fp32');
  });

  it('InputInfo.getPrecision should throw for invalid argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.getPrecision(1)).to.throw(TypeError);
  });

  it('InputInfo.setPrecision should be a function', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.setPrecision).to.be.a('function');
  });

  it('InputInfo.setPrecision should set precision "u8"', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.setPrecision('u8')).to.be.a('undefined');
    expect(inputInfo.getPrecision()).to.be.a('string').equal('u8');
  });

  it('InputInfo.setPrecision should throw for wrong type of argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.setPrecision(1)).to.throw(TypeError);
  });

  it('InputInfo.setPrecision should throw for invalid argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.setPrecision('foo')).to.throw(TypeError);
  });

  it('InputInfo.getLayout should be a function', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.getLayout).to.be.a('function');
  });

  it('InputInfo.getLayout should return a string named "nchw"', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.getLayout()).to.be.a('string').equal('nchw');
  });

  it('InputInfo.getLayout should throw for invalid argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.getLayout(1)).to.throw(TypeError);
  });

  it('InputInfo.setLayout should be a function', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.setLayout).to.be.a('function');
  });

  it('InputInfo.setLayout should set precision "nhwc"', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.setLayout('nhwc')).to.be.a('undefined');
    expect(inputInfo.getLayout()).to.be.a('string').equal('nhwc');
  });

  it('InputInfo.setLayout should throw for wrong type of argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.setLayout(1)).to.throw(TypeError);
  });

  it('InputInfo.setLayout should throw for invalid argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.setLayout('foo')).to.throw(TypeError);
  });

  it('InputInfo.getDims should be a function', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.getDims).to.be.a('function');
  });

  it('InputInfo.getDims should return an array of length 4', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(inputInfo.getDims()).to.be.a('array').with.lengthOf(4);
  });

  it('InputInfo.getDims should return an array with value [1, 3, 227, 227]',
     () => {
       const inputInfo = network.getInputsInfo()[0];
       expect(inputInfo.getDims()).to.be.a('array').to.deep.equal([
         1, 3, 227, 227
       ]);
     });

  it('InputInfo.getDims should throw for invalid argument', () => {
    const inputInfo = network.getInputsInfo()[0];
    expect(() => inputInfo.getDims(1)).to.throw(TypeError);
  });

  it('getOutputsInfo should be a function', () => {
    expect(network.getOutputsInfo).to.be.a('function');
  });

  it('getOutputsInfo should return an array', () => {
    expect(network.getOutputsInfo()).to.be.a('array');
  });

  it('input info array length should be 1', () => {
    expect(network.getOutputsInfo()).to.be.lengthOf(1);
  });

  it('input info array should contain outputInfo objects', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo).to.be.a('outputInfo');
  });

  it('outputInfo.name should be a function', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.name).to.be.a('function');
  });

  it('outputInfo.name should return a string named "prob"', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.name()).to.be.a('string').equal('prob');
  });

  it('outputInfo.name should throw for invalid argument', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(() => outputInfo.name(1)).to.throw(TypeError);
  });

  it('outputInfo.getPrecision should be a function', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.getPrecision).to.be.a('function');
  });

  it('outputInfo.getPrecision should return a string named "fp32"', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.getPrecision()).to.be.a('string').equal('fp32');
  });

  it('outputInfo.getPrecision should throw for invalid argument', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(() => outputInfo.getPrecision(1)).to.throw(TypeError);
  });

  it('outputInfo.setPrecision should be a function', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.setPrecision).to.be.a('function');
  });

  it('outputInfo.setPrecision should set precision "fp16"', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.setPrecision('fp16')).to.be.a('undefined');
    expect(outputInfo.getPrecision()).to.be.a('string').equal('fp16');
  });

  it('outputInfo.setPrecision should throw for wrong type of argument', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(() => outputInfo.setPrecision(1)).to.throw(TypeError);
  });

  it('outputInfo.setPrecision should throw for invalid argument', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(() => outputInfo.setPrecision('foo')).to.throw(TypeError);
  });

  it('outputInfo.getLayout should be a function', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.getLayout).to.be.a('function');
  });

  it('outputInfo.getLayout should return a string named "nchw"', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.getLayout()).to.be.a('string').equal('nchw');
  });

  it('outputInfo.getLayout should throw for invalid argument', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(() => outputInfo.getLayout(1)).to.throw(TypeError);
  });

  it('outputInfo.getDims should be a function', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.getDims).to.be.a('function');
  });

  it('outputInfo.getDims should return an array of length 4', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(outputInfo.getDims()).to.be.a('array').with.lengthOf(4);
  });

  it('outputInfo.getDims should return an array with value [1, 1000, 1, 1]',
     () => {
       const outputInfo = network.getOutputsInfo()[0];
       expect(outputInfo.getDims()).to.be.a('array').to.deep.equal([
         1, 1000, 1, 1
       ]);
     });

  it('outputInfo.getDims should throw for invalid argument', () => {
    const outputInfo = network.getOutputsInfo()[0];
    expect(() => outputInfo.getDims(1)).to.throw(TypeError);
  });
});