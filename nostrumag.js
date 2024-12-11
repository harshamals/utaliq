// Get a reference to the canvas element
const canvas = document.getElementById('canvas');

// Specify the rendering context
const ctx = canvas.getContext('2d');

// Select the dummy nodes
const dummyNodes = document.querySelectorAll('.dummy-node');

// Loop through the dummy nodes and draw the data to the canvas
dummyNodes.forEach(node => {
  // Get the data associated with the node
  const data = node.dataset;

  // Extract the relevant information from the data object
  const x = parseInt(data.x);
  const y = parseInt(data.y);
  const text = data.text;

  // Set the drawing properties (e.g. font, color)
  ctx.font = '12px Arial';
  ctx.fillStyle = 'black';

  // Draw the data to the canvas
  ctx.fillText(text, x, y);
});
