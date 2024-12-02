import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    //     var data = "field=value1&field=value2&field=value3&field=value4&field=value5"

    // answer : { field: value1, field: value2 ..... }

    // console.log(varVar);
    // // console.log(letVar);
    // // console.log(constVar);

    // var varVar = 10;
    // let letVar = 20;
    // const constVar = 30;

    // // console.log(varVar, "below");
    // const obj1 = {
    //     a: 1,
    //     b: { b1: 1, b2: 2 },
    //     c: { c1: 2, c2: { c11: 1, c12: 2 } },
    // };

    // const obj2 = {
    //     a: 1,
    //     b: { b1: 1, b2: 2 },
    //     c: { c1: 2, c2: { c11: 1, c12: 2 } },
    // };
    // console.log(objCompFunc(obj1, obj2));

    const parentFunc = () => {
        const v1 = 10;

        const f2 = () => {
            const v2 = 5;
            console.log(v1);
        };
        f2();
    };
    parentFunc();

    f(a, b, c);
    f(a)(b)(c);

    const sum1 = function sum(a, b, c) {
        return a + b + c;
    }

    const csum = function sum2(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            }
        }
    }



    return (
        <>
            <div>Project</div>
        </>
    );
}

export default App;
// batch updates , 18 feat


var data = "field=value1&field=value2&field=value3&field=value4&field=value5"

answer: { field: value1, field: value2 .....}

const data =
    "field=value1&field1=value2&field3=value3&field4=value4&field5=value5";
const sString = data.split("&");

let resObj = {};

for (let i = 0; i < sString.length; i++) {
    let temp = sString[i].split("=");
    resObj = { ...resObj, [temp[0]]: temp[1] };
}
console.log(resObj);


const apiCallWithData = () => new Promise((resolve, reject) => {
    resolve("Data : datadatadatadata")
})

const apiCallWithError = () => new Promise((resolve, reject) => {
    reject("Error Message from api: ")
})


printApiResponse()
const apiCallWithData = () =>
    new Promise((resolve, reject) => {
        resolve("Data : datadatadatadata");
    });

const apiCallWithError = () =>
    new Promise((resolve, reject) => {
        reject("Error Message from api: ");
    });

const tempPromiseRes = Promise.allSettled([
    apiCallWithData(),
    apiCallWithError(),
])
    .then((data) => console.log(data))
    .catch((data2) => console.log(data2));
console.log(tempPromiseRes);

const tempFunc = async () => {
    try {
        const fetch1 = await apiCallWithData();
        const fetch2 = await apiCallWithError();
        console.log({ fetch1 }, { fetch2 });
    } catch {
        console.log("Throw Error");
    }
};
tempFunc();


















obj1 = {
    "a": 1,
    "b": { "b1": 1, "b2": 2 },
    "c": { "c1": 2, "c2": { "c11": 1, "c12": 2 } }
}


obj2 = {
    "a": 1,
    "b": { "b1": 1, "b2": 2 },
    "c": { "c1": 2, "c2": { "c11": 1, "c12": 2 } }
}



const objCompFunc = (obj1, obj2) => {
    let res = true;

    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }
    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);

    if (entries1.length !== entries2.length) {
        return false;
    }

    for (let i = 0; i < entries1.length; i++) {
        if (
            typeof obj1[entries1[0]] === "object" &&
            typeof obj2[entries1[0]] === "object"
        ) {
            res = objCompFunc(obj1[entries1[0]], obj2[entries1[0]]);
        } else if (!obj2[entries1[0]]) {
            res = false;
            break;
        } else if (obj1[entries1[0]] !== obj2[entries1[0]]) {

            res = false;
            break;
        }
    }


    return res;
};



const parentFunc = () => {
    const v1 = 10;

    const f2 = () => {
        const v2 = 5;
        console.log(v1);
    };
    f2();
};
parentFunc();



const sum1 = function sum(a, b, c) {
    return a + b + c;
}

const csum = function sum2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}