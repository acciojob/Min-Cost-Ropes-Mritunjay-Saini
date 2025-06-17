
function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Create a min-heap using a priority queue
  const heap = [...arr].sort((a, b) => a - b); // Min-heap via sorting initially

  let totalCost = 0;

  while (heap.length > 1) {
    // Extract two smallest ropes
    const first = heap.shift();
    const second = heap.shift();

    const cost = first + second;
    totalCost += cost;

    // Insert the combined rope back into heap (keep it sorted)
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}
