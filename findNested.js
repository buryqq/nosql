use films

db.film.insert(

{"title": "capitan ameryka",
"year": 1999,
 "director":{
"first_name": "michael",
 "last_name": "bay",
 "borth_date" : "1970-05-02"
            }
}
)

db.film.find({"director.last_name":"bay"})


db.film.aggregate([{$group: {_id:'$year',total: {$sum:1}}}])

