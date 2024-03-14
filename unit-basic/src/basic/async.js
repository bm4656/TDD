function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network error');
  }
  return Promise.resolve({ item: 'water', price: 100 });
}

module.exports = fetchProduct;
