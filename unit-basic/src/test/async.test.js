const fetchProduct = require('../async');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'water', price: 100 });
      done();
    });
  });

  it('async - return', () => {
    fetchProduct().then((item) => {
      return expect(item).toEqual({ item: 'water', price: 100 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'water', price: 100 });
  });

  it('async - resolve', async () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'water',
      price: 100,
    });
  });

  it('async - reject', async () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
