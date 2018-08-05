var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Goods = require("../models/goods");
mongoose.connect("mongodb://127.0.0.1:27017/Mall");
mongoose.connection.on("connected", function() {
  console.log("MongoDB connected success");
});
mongoose.connection.on("error", function() {
  console.log("MongoDB connected fail");
});
mongoose.connection.on("disconnected", function() {
  console.log("MongoDB disconnected");
});
router.get("/", function(req, res, next) {
  // res.send('hello goods list')
  let page = parseInt(req.param("page"));
  let pageSize = Number(req.param("pageSize"));
  let sort = parseInt(req.param("sort"));
  let skip = (page - 1) * pageSize;
  let params = {};
  let goodsMouel = Goods.find(params)
    .skip(skip)
    .limit(pageSize);
  goodsMouel.sort({
    salePrice: sort
  });
  goodsMouel.exec({}, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      res.json({
        status: "1",
        msg: "",
        result: {
          count: doc.length,
          list: doc
        }
      });
    }
  });
});
module.exports = router;
