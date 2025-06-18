class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      [this.heap[index], this.heap[Math.floor((index - 1) / 2)]] =
        [this.heap[Math.floor((index - 1) / 2)], this.heap[index]];
      index = Math.floor((index - 1) / 2);
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] =
          [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
  }
}

// Main function
function mincost(arr) {
  const heap = new MinHeap();

  // Insert all rope lengths into the min heap
  for (let rope of arr) {
    heap.insert(rope);
  }

  let totalCost = 0;

  // Combine ropes until one remains
  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();

    const cost = first + second;
    totalCost += cost;

    heap.insert(cost);
  }

  return totalCost;
}
