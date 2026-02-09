const users = [
  { id: 1, username: "Rahim123", email: "rahim@gmail.com" },
  { id: 2, username: "Karim_dev", email: "karim@yahoo.com" },
  { id: 3, username: "Ayesha99", email: "ayesha@gmail.com" },
  { id: 4, username: "AdminUser", email: "admin@system.com" }
];

// function searchUsers(users, keyword){
//     const matched = [];
//     for (const user of users){
        
//         if (user.username.toLowerCase().includes(keyword.toLowerCase())||user.email.toLowerCase().includes(keyword.toLowerCase())){
//             matched.push(user)
//         }
//     }
//     return matched;
// }

// const result = searchUsers(users, "email");
// console.log(result);
function searchUsers(users, keyword){
    const matched = [];

    for (const user of users){
        if (
            user.username.toLowerCase().includes(keyword.toLowerCase()) ||
            user.email.toLowerCase().includes(keyword.toLowerCase())
        ){
            matched.push(user);
        }
    }
    return matched;
}

const result = searchUsers(users, "gmail");
console.log(result);
