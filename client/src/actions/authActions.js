
export const registerUser = (details) => {
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
    });
};

// export const registerUser = (userData) => {
//     console.log(userData);
//     fetch("http://localhost:5000/api/users/register", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => response.json())
//       .then((response) => console.log(JSON.stringify(response)));
// };

// export const registerUser = (userData) => {
//   axios
//     .post("http://localhost:5000/api/users/register", userData)
//     .catch((err) => console.log('error occured posting to the server...!'));
// };

// export const registerUser = (userData) => {
//     function post (url, data) {
//       return fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//     };

//     post("http://localhost:5000/api/users/register", userData);
// };

export const loginUser = (details) => {
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
    })
        .then(response => console.log(response.json()));
};