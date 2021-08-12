const express = require('express'),
  morgan = require('morgan');

const app = express();

let topTen = [

  //1
  {
    title: 'Happy Gilmore',
    Director:'Dennis Dugan',
    Genra:'Sports Comedy'
  },

  //2
  {
    title: 'Billy Madison',
    Director:'Tamra Davis',
    Genra:'Comedy'
  },

  //3
  {
    title: '8 Mile',
    Director:'Curtis Hanson',
    Genra:'Musical Drama'
  },

  //4
  {
    title: 'Get Rich or Die Tryin',
    Director:'Jim Sheridan',
    Genra:'Amercan Hip Hop Crime Drama'
  },

  //5
  {
    title: 'The Wolf of Wall Street',
    Director:'Martin Scorsese',
    Genra:'Comedy Crime'
  },

  //6
  {
    title: 'Aviator',
    Director:'Martin Scorsese',
    Genra:'Drama Film'
  },

  //7
  {
    title: 'The Fast and the Furious',
    Director:'Rob Cohen',
    Genra:'Action Film'
  },

  //8
  {
    title: 'Caddyshack',
    Director:'Harold Ramis',
    Genra:'Sports Comedy'
  },

  //9
  {
    title: 'Blazing Saddles',
    Director:'Mel Brooks',
    Genra:'Western Comedy'
  },

  //10
  {
    title: 'American Pie',
    Director:'Paul Weitz',
    Genra:'Comedy'
  },
];

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my Top Ten Movie App!');
});

app.use(express.static('public'));

// gets all the movies (my top ten)
app.get('/movies', (req, res) => {
  res.json(topTen);
});

// gets single movie info
app.get('/movies/:title', (req, res) => {
  res.json(topTen.find( (movie) =>
    { return movie.title === req.params.title }));
});

// gets director info
app.get('/movies/:director', (req, res) => {
res.json(topTen.find( (movie) =>
  { return movie.director === req.params.director }));
  
// gets genra info
// app.get('/movies/:title/:genra', (req, res) => {
//   let movies = genra.find( (movie) => { return movie.genra === req.params.genra});

// Add new user (/users) to post
app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// Update username (/users/:user/:userid)
app.put('/users/:user/:userid', (req, res) => {
  let user = users.find((user) => {return user.name === req.params.name});
})

// Add movie to users favorite list
app.post('/users/:user/:movies/:favMovie', (req, res) => {
  res.send('You favorite movies not yet able to be add but will be coming soon!');
});

// deleting favorite movies (/users/:user/:movies/remove/:favMovie)
app.delete('/users/:user/:movies/remove/:favMovie', (req, res) => {
  res.send('Sorry no movie to delete yet but hold tight!');
});

// Delete Users
app.delete('/users/:id', (req, res) => {
  let user = users.find((user) => {return user.id === req.params.id });

  if (user) {
    users = users.filter((obj) => { return obj.id !== req.params.id });
    res.status(201).send('User ' + req.params.id + ' was deleted.');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
