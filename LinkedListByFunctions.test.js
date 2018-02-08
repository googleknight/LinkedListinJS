const { Node } = require('./LinkedListByFunctions');

describe('Testing Linked List and its functions:', () => {
  it('Node should be a method', () => {
    expect(typeof Node).toBe('function');
  });
});
