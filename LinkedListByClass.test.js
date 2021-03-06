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
  it('Method should append node in end', () => {
    const head = new Node(0);
    head.appendInLast(1);
    const output = [head.data, head.nextNode.data];
    const expected = [0, 1];
    expect(output).toEqual(expected);
  });
});
