const fs = require('fs');

const filePath = process.argv[2];

// Guard for no file path
if (!filePath) {
  console.log("Error reading file");
  process.exit(0);
}

// Read file asynchronously
function readFileAsync(path) {
  return new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        resolve(null); // Resolve null instead of rejecting
        return;
      }
      resolve(data);
    });
  });
}

// Modify text: uppercase + reverse
function modifyText(text) {
  if (!text) return ""; // In case file missing
  return text.toUpperCase().split("").reverse().join("");
}

// Run
readFileAsync(filePath).then((data) => {
  if (!data) {
    console.log("Error reading file");
  } else {
    console.log(modifyText(data));
  }
});
