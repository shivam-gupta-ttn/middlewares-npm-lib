var fs = require('fs');

//Buffer Example
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.from("This will print the complete sentence")
buf1.write("It will print upto 10 only");

console.log("buf1 data :", buf1.toString())
console.log("buf2 data :", buf2.toString())
console.log(".........................................................")

//Stream example
var readableStream = fs.createReadStream(__dirname + '/data1.txt', { encoding: 'utf-8' });

readableStream.on('data', (chunks) => {
    console.log("chunk received")
})

//pipe example
var attachedStream = fs.createWriteStream(__dirname + '/data2.txt', { encoding: 'utf-8' });
readableStream.pipe(attachedStream)
console.log("attached data1 content to attachedStream and write on data2.txt")