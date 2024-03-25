// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served as a template, meaning that it should be rendered with the following data:
// The comments array that is defined in the comments.js file.
// The current date and time in the   // Render the comments.html template
  const comments = ['Comment 1', 'Comment 2', 'Comment 3']; // Replace with your comments array
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const renderedTemplate = data
    .replace('{{comments}}', JSON.stringify(comments))
    .replace('{{currentDate}}', currentDate);

res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(renderedTemplate);
