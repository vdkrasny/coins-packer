module.exports = obj => typeof obj === 'object' && Object.prototype.toString.call(obj) !== '[object Array]' && !!obj;
