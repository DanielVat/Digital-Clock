import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';
import { myTime } from './script.js';

describe('myTime', () => {
  beforeEach(() => {
    // Create DOM elements for testing
    const dom = new JSDOM(`
      <div id="hrs"></div>
      <div id="min"></div>
      <div id="sec"></div>
    `);
    global.document = dom.window.document;
  });

  afterEach(() => {
    // Clean up after each test
    delete global.document;
  });

  it('Updates DOM elements with current time', () => {
    const clock = sinon.useFakeTimers(new Date('2023-09-09T14:00:00').getTime());

    // Call the myTime function
    myTime();

    // Assert that the DOM elements have been updated correctly
    expect(document.getElementById('hrs').textContent).to.equal('14');
    expect(document.getElementById('min').textContent).to.equal('00');
    expect(document.getElementById('sec').textContent).to.equal('00');

    clock.restore(); // Restore the original Date object
  });

  it('Handles single-digit hours, minutes, and seconds', () => {
    const clock = sinon.useFakeTimers(new Date('2023-09-09T09:05:08').getTime());

    // Call the myTime function
    myTime();

    
    expect(document.getElementById('hrs').textContent).to.equal('09');
    expect(document.getElementById('min').textContent).to.equal('05');
    expect(document.getElementById('sec').textContent).to.equal('08');

    clock.restore(); 
  });

})  
