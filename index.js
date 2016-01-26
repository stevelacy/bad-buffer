module.exports = function (size) {
  if (typeof size !== 'number') {
    size = 1024;
  }
  return new Buffer(size);
}

