// const formData = {
//     name: "Yuyi",
//     email: "yuyi365@gmail.com",
// };

// const submitData = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/users", submitData) 
// .then (response => {
//     return response.json();
// })
// .then (jsonUser => {
//     return console.log(jsonUser);
// })
// .catch (error => {
//     alert("Does not work!");
//     return console.log(error.message);
// });

const submitData = (name, email) => {

    return fetch("http://localhost:3000/users/", { 
        method: "POST",
        headers: {
            "Content-Type": "applicjation/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name, email
        })
    })
    .then (response => {
        return response.json()
    })
    .then (jsonUserObject => {
        document.body.textContent = jsonUserObject["id"]
    })
    .catch (error => {
       return document.body.textContent = error.message
    })
}