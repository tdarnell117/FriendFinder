app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/survey.html')))
//make a default catch all route that leads to home.html which displays the home page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html')))