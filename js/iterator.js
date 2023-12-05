

let arr = ['a', 'b', 'c', 'd']
let iter = arr[Symbol.iterator]()
function handle(result) {
    if (result.done) {
        console.log(`iterator done`)
        return
    }

    console.log(`itr value : ${result.value}`)

    handle(iter.next())
}

handle(iter.next())


function* generatorFn() {
    yield *["bbc", 'qqr', 'eet'];
  }
  let generatorObject = generatorFn();
  console.log(generatorObject.next());   // { done: false, value: undefined }
  console.log(generatorObject.next());   // { done: true, value: undefined }