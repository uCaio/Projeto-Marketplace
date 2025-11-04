require('dotenv').config();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {sequelize } = require('./db'); // seu objeto sequelize configurado

const sessionStore = new SequelizeStore({ db: sequelize });

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'fallbackSecret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
});

sessionStore.sync(); // cria a tabela de sessões (se necessário)

module.exports = sessionMiddleware;
