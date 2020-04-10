class _Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
        this.first = node;
    }
    if(this.last){
        this.last.next = node;
    }
    this.last = node;
  }
  dequeue(){
     if(!this.first) {
          return console.log('nada in queue')
      }
      const node = this.first;
      this.first = this.first.next;
      if (node === this.last) {
          this.last = null;
          return node.value;
      }
      return node.value;
  }

  show() {
    return this.first.value;
  }

  all() {
    while(this.first !== null){
      return this.first.value;
      this.first = this.first.next;
    }
  }
}

module.exports = Queue
