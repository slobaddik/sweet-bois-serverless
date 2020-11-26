'use strict';

const importer  = require('anytv-node-importer');
const __        = importer.dirloadSync(__dirname + '/../controllers');

module.exports = (router) => { 
    router.get('/simp', __.simp.getSimp);

    return router;
};