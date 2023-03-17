var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a generate');
});

router.post('/segitiga', function(req, res, next) {
  console.log(req.query);
  const arry = String(req.query.input).split("").map((num, idx) => {
    return num * (1 + idx);
  })
  console.log(arry);

  return res.status(200).json({
    result: "segitiga",
    arry: arry
  })
});

module.exports = router;
