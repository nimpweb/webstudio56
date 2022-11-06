export const encodeHtmlSpecialChars = (str)  => {
  if (str == null) return '';
  return String(str).
          replace(/&/g, '&amp;').
          replace(/</g, '&lt;').
          replace(/>/g, '&gt;').
          replace(/"/g, '&quot;').
          replace(/'/g, '&#039;');
}

export const decodeHtmlSpecialChars = (str) => {
  if (str === null) return '';
  return String(str).
    replace('&amp;', '&').
    replace('&lt;', '<').
    replace('&gt;', '>').
    replace('&quot;', '"').
    replace('&#039;', "'");
}