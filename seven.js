// Mock user data
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

// Function to authenticate user
function authenticate(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    return "Authentication successful";
  } else {
    return "Authentication failed";
  }
}

// Example usage
const username = "user1";
const password = "password1";
console.log(authenticate(username, password)); // Output: Authentication successful
