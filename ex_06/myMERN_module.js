let fs = require("fs");

let myMERN_module = {
    create: function (name) {
        fs.writeFile(name, 'utf-8', (err) => {
           if (err) {
            console.log("Create" + name +" : KO")
           }
           else {
               console.log("Create " + name + " : OK")
           }
        });
    },
    read: function (name) {
        fs.readFile(name, 'utf-8', (err, data) => {
           if (err) {
               console.log("Read" + name +" : KO")
           }
           else {
               console.log(data);
               console.log("Read " + name + " : OK");
           }
        });
    },
    update: function (name, content) {
        fs.writeFile(name, content, (err) => {
            if (err) {
                console.log("Update "+ name + ": KO")
            }
            else {
                console.log("Update "+ name + ": OK")
            }
        });
    },
    delete: function(name) {
        fs.unlink(name, 'utf-8', (err) => {
           if (err) {
                console.log("Delete"+ name + ": KO")
           }
           else {
               console.log("Delete"+ name + ": OK")
           }
        });
    }
};

module.exports = myMERN_module;