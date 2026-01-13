const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
  console.log("Error reading file");
  process.exit(0);
}

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject("Error reading file"); 
        return;
      }
      resolve(data);
    });
  });
}

function modifyText(text) {
  return new Promise((resolve) => {
    const upperCaseText = text.toUpperCase();
    const reversedText = upperCaseText.split('').reverse().join('');
    resolve(reversedText);
  });
}

readFileAsync(filePath)
  .then((data) => modifyText(data))
  .then((modifiedText) => console.log(modifiedText))
  .catch((error) => console.log(error));
