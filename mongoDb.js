//первое задание
db.mycoll.find({
    "scores.score": {
        $gt: 87,
        $lt: 93
    }
})


//второе задание
db.mycoll.aggregate([{
    $unwind: {
        path: "$scores"
    }
}, {
    $match: {
        "scores.type": "exam",
        "scores.score": {
            $gt: 90
        }
    }
}])

//третье задание
db.mycoll.update({
    name: "Dusti Lemmond"
}, {
    $set: {
        accepted: true
    }
}, {
    multi: true
})