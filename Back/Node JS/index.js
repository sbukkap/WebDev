// const file = require("fs");
// file.writeFile("bruh.txt", "new file", (err)=>{
//     if (err) throw err;
//     console.log("file saved") ;  
// }) ;

const file = require("fs") ; //fs->filesystem
file.readFile("bruh.txt", 'utf8', (err, data)=> {
    if (err) throw err; 
    console.log(data) ; 
}) ;


