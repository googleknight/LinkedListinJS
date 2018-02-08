function Node(data) {
  this.data = data;
  this.nextNode = null;
}
Node.prototype.getLastNode = function getLastNode() {
  let head = this;
  while (head && head.nextNode) {
    head = head.nextNode;
  }
  return head;
};
Node.prototype.appendInLast = function appendInLast(data) {
  const newNode = new Node(data);
  const lastNode = this.getLastNode();
  lastNode.nextNode = newNode;
};
module.exports = Node;
