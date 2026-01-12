// //ques 1
// function check(OrderId){
//     return new Promise((resolve,reject)=>{
//         if(typeof OrderId==="number"){
//             setTimeout(()=>{
//                 resolve("order shipped")
//             },1000);
//         }else{
//             reject("invalid order id");
//         }
//     });
// }
// async function orderStatusHandler() {
//   try {
//     const result = await check(101);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// orderStatusHandler();

// // ques 2
// function getUser(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Anjali", type: "Premium" });
//     }, 1500);
//   });
// }

// function checkSubscription(user) {
//   return new Promise((resolve, reject) => {
//     if (user.type === "Premium") {
//       resolve("Access Granted to Netflix");
//     } else {
//       reject("Please Subscribe");
//     }
//   });
// }
// async function authenticateUser() {
//   try {
//     const user = await getUser("Anjali");
//     const access = await checkSubscription(user);
//     console.log(access);
//   } catch (error) {
//     console.log(error);
//   }
// }

// authenticateUser();


// fetching data from api
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // convert response to JSON
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data using then/catch:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// 2nd way
async function getUser(){
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  const user= await response.json();
  console.log(user);
}
getUser();