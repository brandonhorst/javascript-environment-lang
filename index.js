var lang = null;
/* global window */
if (typeof window !== 'undefined' &&
  typeof window.navigator !== 'undefined' &&
  typeof window.navigator.language !== 'undefined') {
  lang = window.navigator.language.replace('-', '_');

} else if  (process && process.env && process.env.LANG) {
  lang = process.env.LANG.split('.')[0];
}

module.exports = lang;
