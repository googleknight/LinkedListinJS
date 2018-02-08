class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
  getLastNode() {
    let head = this;
    while (head && head.nextNode) {
      head = head.nextNode;
    }
    return head;
  }
  appendInLast(data) {
    const newNode = new Node(data);
    const lastNode = this.getLastNode();
    lastNode.nextNode = newNode;
  }
}

module.exports = Node;
