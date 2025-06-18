class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    const current = this.heap[i];

    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent <= current) break;
      this.heap[i] = parent;
      i = parentIndex;
    }
    this.heap[i] = current;
  }

  bubbleDown() {
    let i = 0;
    const length = this.heap.length;
    const current = this.heap[i];

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === i) break;

      this.heap[i] = this.heap[smallest];
      i = smallest;
    }
    this.heap[i] = current;
  }

  size() {
    return this.heap.length;
  }
}

function mincost(arr) {
  const minHeap = new MinHeap();

  for (let num of arr) {
    minHeap.insert(num);
  }

  let totalCost = 0;

  while (minHeap.size() > 1) {
    let first = minHeap.extractMin();
    let second = minHeap.extractMin();
    let cost = first + second;
    totalCost += cost;
    minHeap.insert(cost);
  }

  return totalCost;
}
