var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://adminuser:Welcome1@ds161146.mlab.com:61146/sevensalaiessentials",["bookings"]);
router.get("/bookings", function(req, res, next){
    db.bookings.find(function(err, bookings){
        if(err){
            res.send(err);
        }
        res.json(bookings);
    });
});

router.post("/bookings", function(req, res, next){
    var booking = req.body.data;

    if(booking.userName){
        res.status(400);
        res.json({
            error:"Bad data"
        });
    }else{
        db.bookings.save(bookings, function(err, saveBooking){
            if(err){
                res.send(err);
            }
            res.json(saveBooking);
        });
    }
});

module.exports = router;

