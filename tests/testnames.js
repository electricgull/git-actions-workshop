const { outputBob, outputSue } = require('../src/output.js');
const assert = require('assert');

it('checks for Bob', () => {
  assert.equal(outputBob, `Bob`);
});

it('checks for Sue', () => {
    assert.equal(outputSue, `Sue`);
});