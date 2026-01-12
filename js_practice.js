const user = {name:"Astha",email:"goswamiastha0107@gmail.com" , phone: 1234567890};
// methods of object
// const userName = user.name;
// const email = user.email;
// console.log(userName);
// console.log(email);

const {name , email , phone} = user;
// console.log(name);
// console.log(email);
// console.log(phone);
const user1=user;
user1.name="Astha Goswami";
console.log(user);
// const updateUser = {...user , address:"mathura"}
// console.log(updateUser);
const numbers=[1,2,3,4,5];
const newNumbers=numbers.map((number)=>number*2);
console.log(newNumbers);
// ques1

const rawUsers = [
{ id: 1, name: "Roy", password: "fb_password", role: "admin" },
{ id: 2, name: "Sanya", password: "123_password", role: "user" },
{ id: 3, name: "Amit", password: "secret_password", role: "user" }
];

const safeUsers = rawUsers.map(({password, ...rest}) => rest);
console.log(safeUsers);

const admins = safeUsers.filter(user => user.role === "admin");
console.log(admins);

const fetchUser=(userId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const users={1:{name:"Astha", email:"astha@gmail.com",address:"mathura"},2:{name:"vishal", email:"vishal@gmail.com",address:"delhi"}}
        })
        const user=users[userId];
        if(user){
            resolve(user);
        }else{
            reject("user not found");
        }
    })
}
// fetchUser(3)
// .then((user)=>console.log(user));
// .catch((err)=>console.log(err));

// const response= await fetch("url");
const userData=async(userId)=>{
    try{
        const user= await fetchUser(userId);
        console.log("user data is fetched");
    }
    catch(e){
        console.log(e);
    }
}