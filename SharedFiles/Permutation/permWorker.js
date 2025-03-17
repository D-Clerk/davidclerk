// In your main thread (UI thread)
const worker = new Worker('permWorker.js');

worker.postMessage('abcdef'); // Send string to worker

worker.onmessage = function(event) {
  const permutations = event.data;
  // Handle result, e.g., append to DOM
};

// In permWorker.js (background thread)
onmessage = function(event) {
  const permutations = getPermutations(event.data);
  postMessage(permutations); // Send permutations back to main thread
};
