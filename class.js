const sqlite3 = require('sqlite3').verbose();



let db = new sqlite3.Database('./class.db');
        
        let sql = "SELECT id, name, age, gender from classmate";
        
        
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.id + ". " + row.name + " - " + row.age + ", " + row.gender);
                
            });
        });
        db.close();

let db1 = new sqlite3.Database('./class.db');
        
        let sql1 = "SELECT classmate_id from class_classmate where class_id = 1";
        
        
        db1.all(sql1, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.classmate_id);
                
            });
        });
        db1.close();


//let dbd = new sqlite3.Database('./class.db');
//        
//        let sqll = "SELECT id, name, color, type from thing";
//        
//        
//        dbd.all(sqll, [], (err, rows) => {
//            if (err) {
//                throw err;
//            }
//            rows.forEach((row) => {
//                console.log(row.id + ". " + row.name + " - " + row.color + ", " + row.type);
//                
//            });
//        });
//        dbd.close();




//let dbd = new sqlite3.Database('./class.db');
//        
//        let sqll = "SELECT cm_id, thind_id from classmate_thing";
//        
//        
//        dbd.all(sqll, [], (err, rows) => {
//            if (err) {
//                throw err;
//            }
//            rows.forEach((row) => {
//                console.log(row.cm_id + " " + row.thing_id);
//                
//            });
//        });
//        dbd.close();


