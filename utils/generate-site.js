const fs = require("fs");

const writeFile = (content) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./dist/index.html", content, (err) => {
        if (err) {
          reject(err);
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: "File created!",
        });
      });
    });
  };

  module.exports = {writeFile};