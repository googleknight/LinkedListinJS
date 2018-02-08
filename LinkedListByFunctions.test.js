const Node = require('./LinkedListByFunctions');

describe('Testing Linked List and its functions:', () => {
  it('Node should be a method', () => {
    expect(typeof Node).toBe('function');
  });
  it('Method should append node in end', () => {
    const head = new Node(0);
    head.appendInLast(1);
    const output = [head.data, head.nextNode.data];
    const expected = [0, 1];
    expect(output).toEqual(expected);
  });
});
