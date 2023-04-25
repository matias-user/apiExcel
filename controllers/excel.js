const { response } = require('express');

const cutExcelFor1000Rows = (req, res = response) => {

    console.log('pasa');
    res.json({
        msg:'Todo ok'
    });
}

module.exports = {
    cutExcelFor1000Rows
}