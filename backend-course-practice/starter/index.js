const fs = require('fs')

let inText = fs.readFileSync('./txt/input.txt', 'utf-8') //reading a file
console.log("This is the text")
console.log(inText)


let newText = `This is a short txt about Avo ${inText}. \n This was written on Monday, September 25.`

fs.writeFileSync('./txt/input.txt',newText)
console.log("Writing Successful!")
