//---------------------------------- Problem -1--------------------------
function cubeNumber(number) {
    if (typeof number !== "number") {
        return "please provide a number";
    }
    else {
        let cube = number * number * number;
        return cube;
    }
}

//-------------------------------Problem -2-----------------------------
function matchFinder(string1, string2) {
    const searchString=string1.includes(string2);
    console.log(searchString);
    return searchString;
}


//----------------------------- Problem -3---------------------------------
function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        console.log("Invalid Input")
    }
    else if (arr[0] == arr[1]) {
        console.log("Equal")
    }
    else if (arr[0] > arr[1]) {
        console.log(arr)
    }
    else {
        console.log([arr[0], arr[1]] = [arr[1], arr[0]]);
    }
}

//--------------------------- Problem -4---------------------------------
function findAddress(obj) {
    const value=Object.values(obj);
    console.log(value)
    return value;
}
findAddress({society: "Earth Perfect"})


//--------------------------- Problem -5---------------------------------
function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];

    }
    if (sum >= totalDue) {
        console.log("True");
    }
    else if (changeArray.length === 0) {
        console.log("This array is empty now");
    }
    else {
        console.log("False")
    }

}
