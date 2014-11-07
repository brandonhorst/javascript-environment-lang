var expect = require('chai').expect;

var lang = require('../index');

describe('lang', function() {
  it('gets the language', function() {
    if (typeof window !== 'undefined') {
      expect(lang).to.equal(window.navigator.language.replace('-', '_'));
    } else {
      expect(lang).to.equal(process.env.LANG.split('.')[0]);
    }
  });
});
