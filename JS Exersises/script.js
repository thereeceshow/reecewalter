function printReverse(arr) {
    for (let i = 1; i <= arr.length; i++) {
    dArr = (arr.length - i)
    console.log(arr[dArr])
    };
};
printReverse([1,2,3,4,5])

printReverse(["a","b","c","d","e"])

console.log("**************")

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

isUniform([2,2,2,2])
isUniform([1,2,2,2])

console.log("**************")

function sumArray(arr) {
    var x = 0
    arr.forEach(function(element) {
        x = element + x
        /* Colt uses:
        x += element;
        in his example - same effect */
    });
    console.log(x)
}

sumArray([1,2,5,8,100])

sumArray([10,10,10,20])

console.log("**************")

function maxArray(arr) {
    var max = 0
    arr.forEach(function(element) {
        if (element > max) {
            max = element
        }
    })
    console.log(max)
}
maxArray([10,50,-9,7, 500])

 
var person = {
    name: "Reece",
    age: 34,
    city: "Lexington",
};

console.log(person.name)
console.log(person["name"])
console.log(person.age)
console.log(person["age"])
console.log(person.city)
console.log(person["city"])

console.log("**************")

var movies = [
    {
    title: "Die Hard",
    hasWatched: true,
    rate: 5
    },
    {
    title: "Moana",
    hasWatched: true,
    rate: 5
    }
]
movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){result += 'watched ';
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rate + " stars";
    console.log(result)
})

var test1 = document.getElementById("first");
var test2 = document.getElementsByClassName("special")[0];
var test3 = document.querySelector(#first);
var test4 = document.querySelector(.special); 