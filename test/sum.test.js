
/**
 * @jest-environment jsdom
 */

const hamburger = require('../public/js/humburger.js');

test('test moving humburger menu', () => {
  expect(hamburger());
});
