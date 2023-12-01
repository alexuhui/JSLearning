console.log("example2.js 999")

function varTest() {
    console.log(name)
    name = "bbc"
    console.log(name)
    var name 
}

function letTest() {
    // console.log(name) //ReferenceError: name is not defined
    // name = "bbc" // ReferenceError: name is not defined
    // console.log(name) //ReferenceError: name is not defined
    let name 
}

varTest()
letTest()