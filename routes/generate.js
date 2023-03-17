var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a generate');
});

router.post('/segitiga', function(req, res, next) {
  let x = "1"
  const arry = String(req.query.input).split("").map((num, idx) => {
    x = x + "0";
    if(num == 0) {
      return num + x.replace("1", "");
    }
    return num * Number(x);
  })

  return res.status(200).json({
    result: "segitiga",
    arry: arry
  })
});

module.exports = router;
