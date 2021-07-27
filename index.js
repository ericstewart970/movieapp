const express = require('express'),
  morgan = require('morgan');

const app = express();

let topTen = [

  //1
  {
    title: 'Happy Gilmore'
  },

  //2
  {
    title: 'Billy Madison'
  },

  //3
  {
    title: '8 Mile'
  },

  //4
  {
    title: 'Get Rich or Die Tryin'
  },

  //5
  {
    title: 'The Wolf of Wall Street'
  },

  //6
  {
    title: 'Aviator'
  },

  //7
  {
    title: 'The Fast and the Furious'
  },

  //8
  {
    title: 'Caddyshack'
  },

  //9
  {
    title: 'Blazing Saddles'
  },

  //10
  {
    title: 'American Pie'
  },
];

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my Top Ten Movie App!');
});

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.json(topTen);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
