async function retryRequest(promiseFunc, nrOfRetries) {
    // Write your code here
    return new Promise((resolve, reject) => {
        let attempts = 0;
        while (retries < nrOfRetries) {
            //let promiseResult = promiseFunc();
            promiseFunc
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        }
    });
}

let hasFailed = false;
function getUserInfo() {
    return new Promise((resolve, reject) => {
        if (!hasFailed) {
            hasFailed = true;
            reject("Exception!");
        } else {
            resolve("Fetched user!");
        }
    });
}
let promise = retryRequest(getUserInfo, 3);
if (promise) {
    promise
        .then((result) => console.log(result))
        .catch((error) => console.log("Error!"));
}
module.exports.retryRequest = retryRequest;
