let express = require('express')
const cookieParser = require('cookie-parser')

let { PORT } = require('./config/env')
const routes = require('./routes')
const { dbinit } = require('./config/db')
const cors = require("cors");
// const { auth } = require('./middlewares/authMiddleware')
// const {errorHandler} = require('./middlewares/errorHandlerMiddleware')


const app = express()

var corsOptions = {
    origin: "http://localhost:4200"
  };
  app.use(cors(corsOptions));
app.use(express.json());

// app.engine(ext, callback)
// app.engine('html', require('ejs').renderFile) 

// app.set('view engine', 'hbs')
app.use(express.urlencoded({extended : false}))
// app.use(express.static('public'))
app.use(cookieParser())
// app.use(auth)
app.use(routes)
// app.use(errorHandler)
// require("./app/routes/tutorial.routes")(app);



dbinit()
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))





// global.__basedir = __dirname;
// require('dotenv').config()
// const dbConnector = require('./config/db');
// // const mongoose = require('mongoose');
// const apiRouter = require('./router');
// const cors = require('cors');
// // const config = require('./config/config');
// const { errorHandler } = require('./utils');

// dbConnector()
//   .then(() => {
//     const config = require('./config/config');

//     const app = require('express')();
//     require('./config/express')(app);

//     app.use(cors({
//       origin: config.origin,
//       credentials: true
//     }));

//     app.use('/api', apiRouter);

//     app.use(errorHandler);

//     app.listen(config.port, console.log(`Listening on port ${config.port}!`));
//   })
//   .catch(console.error);