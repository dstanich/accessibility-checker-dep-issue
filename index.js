const aChecker = require("accessibility-checker");

const html = `
  <html>
    <head>
      <title>Dependency issue</title>
    </head>
    <body>
      <h1>Hello world</h1>
    </body>
  </html>`;
aChecker.getCompliance(html, "test").then(() => {
  console.log("getCompliance was successful");
  process.exit();
});
