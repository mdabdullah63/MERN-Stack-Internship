url = "https://api.github.com/users/mdabdullah63";
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async is complete');
        resolve();
    }, 1000)
})
promiseOne.then(() => {
    console.log('promise is consumed')
})
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000)
})
    .then(() => {
        console.log('Async 2 resolve')
    })
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "md abdullah",
            mail: "mdabdullah67@gmail.com"
        });
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);
})
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error
        ) {
            resolve({
                username: "md abdullah",
                password: "123"
            })
        } else {
            reject('EOROR Something went worng');
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username;
})
    .then((username) => {
        console.log(username);

    })
    .catch((e) => {
        console.log(e);

    })
    .finally(() => {
        console.log("Finally is resolve and rejected")
    })
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error
        ) {
            resolve({
                username: "java script",
                password: "123"
            })
        } else {
            reject('EOROR JS went worng');
        }
    }, 1000)
})
async function used5() {
    try {
        const respose = await promiseFive;
        console.log(respose);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Complete exicution");

    }


}
used5();

async function getAllUser() {
    try {
        const respose = await fetch(url)
        const data = await respose.json();
        console.log(data);
    } catch (r) {
        console.log("error" + r)
    } finally {
        console.log("code completed");

    }
}
getAllUser();
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

    })
    .catch((e) => {
        console.log("Error" + e);

    })
    .finally(() => {
        console.log("End of code");

    })