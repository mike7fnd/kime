const Kime = require('./kime/index');
const Router = require('./kime/router');

const app = new Kime();
const router = new Router();

// define routes
router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to Kime Framework' });
});

router.get('/hello', (req, res) => {
    res.send('Hello from Kime Framework!');
});

// apply routes to app
router.apply(app.app);

// start server
app.listen(3000, () => {
    console.log('Kime Framework running at http://localhost:3000');
});
