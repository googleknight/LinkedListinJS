const Node = require('./LinkedListByClass');

describe('Testing Linked List by class and its functions:', () => {
  it('Node should be a method', () => {
    expect(typeof Node).toBe('function');
  });
  it('Node should create an object with data and nextNode as value', () => {
    const node = new Node(10);
    expect(node.data).toBe(10);
    expect(node.nextNode).toBe(null);
  });
});
