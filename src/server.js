const { validateLogin } = require('./middlewares/loginValidation');
const { loginAuth } = require('./controllers/loginController');

require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validateLogin, loginAuth);

app.listen(port, () => console.log('ouvindo porta', port));
