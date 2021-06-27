

/**
 * @jest-environment jsdom
 */

 const scroll = require('../public/js/humburger.js');

 test('test moving scroll', () => {
    expect(scroll());
  });
  