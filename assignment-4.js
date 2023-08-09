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
    if ((typeof string1 !== "string") || (typeof string2 !== "string")) {
        return "please provide me a valid file name (string)"
    }
    else {
        const searchString = string1.includes(string2);
        return searchString;
    }

}


//----------------------------- Problem -3---------------------------------
function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "invalid Input";
    }
    else if (arr[0] == arr[1]) {
        return "equal";
    }
    else {
        if (arr[0] > arr[1]) {
            return arr;
        }
        else {
            let bigToSmall = [arr[0], arr[1]] = [arr[1], arr[0]];
            return bigToSmall;
        }

    }
}
//--------------------------- Problem -4---------------------------------
function findAddress(obj) {
    const value = Object.values(obj);
    console.log(value)
    return value;
}
findAddress({ society: "Earth Perfect" })


//--------------------------- Problem -5---------------------------------

function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];

    }
    if (sum >= totalDue) {
        return true;
    }
    else if (changeArray.length === 0) {
        return "This array is empty now";
    }
    else {
        return false;
    }

}


