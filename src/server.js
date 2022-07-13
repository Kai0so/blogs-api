const { validateLogin } = require('./middlewares/loginValidation');
const { loginAuth } = require('./controllers/loginController');
const { validateUserCreation } = require('./middlewares/userValidation');
const { validateToken } = require('./middlewares/tokenValidation');
const User = require('./controllers/userController');

require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validateLogin, loginAuth);
app.post('/user', validateUserCreation, User.create);

app.get('/user', validateToken, User.getAll);
app.get('/user/:id', validateToken, User.getById);

app.listen(port, () => console.log('ouvindo porta', port));
