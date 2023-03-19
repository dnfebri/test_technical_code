var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a generate');
});

router.post('/segitiga', function (req, res, next) {
  let x = "1";
  const {
    input
  } = req.query;
  if (!input) {
    return res.status(401).json({
      msg: "masukan query '?input='"
    })
  }
  const arry = String(input).split("").map((num, idx) => {
    x = x + "0";
    if (num == 0) {
      return num + x.replace("1", "");
    }
    return num * Number(x);
  });
  return res.status(200).json({
    result: "segitiga",
    arry: arry
  })
});

router.post("/ganjil", (req, res) => {
  const {
    input
  } = req.query;
  if (!input) {
    return res.status(401).json({
      msg: "masukan query '?input='"
    })
  }
  let x = "";
  const arry = String(input).split("").map((num, idx) => {
    if (num % 2 == 0) {
      return;
    }
    x = x + "0"
    return num + x;
  });
  return res.status(200).json({
    result: "segitiga",
    arry: arry
  })
});

router.post("/prima", (req, res) => {
  const {
    input
  } = req.query;
  if (!input) {
    return res.status(401).json({
      msg: "masukan query '?input='"
    })
  }

  function isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  const arry = [];
  for (let i = 2; i <= Number(input); i++) {
    if (isPrime(i)) {
      arry.push(i);
    }
  }
  return res.status(200).json({
    result: "segitiga",
    arry: arry
  })
})

module.exports = router;