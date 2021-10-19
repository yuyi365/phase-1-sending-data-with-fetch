/* Construct a POST Request Using fetch()
    --> POST requests must contain (HTTP verb, headers, body)
    HTTP Verb: type of request (POST, PATCH, DELETE)
    
    Headers: metadata about the data we want to send ('Content-Type') = 'application/json' if it is a json file;

    Body: add additional data about what we're sending

    JSON.stringify() to convert objects to strings
*/

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: 'application/json',
//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(response => {
//       return response.json();
//   })
//   .then(object => {
//       console.log(object);
//   })
//   .catch(() = (error) =>{
//     alert("Does not work!");
//     console.log(error.message);
//   });

