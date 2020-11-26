const body_parser   = require('body-parser');
const cors          = require('cors');
const express       = require('express');
const functions     = require('firebase-functions');
const helmet        = require('helmet');
const router        = require('./config/router');        

const app = express();

// 3rd-party middleware
app.use(cors());
app.use(helmet());
app.set('case sensitive routing', true);
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// routes
app.use('/v1', router(express.Router()));

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

exports.app = functions.https.onRequest(app);
