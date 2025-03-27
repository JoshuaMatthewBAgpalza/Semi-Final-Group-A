const fs = require('fs');

const filePath = 'data.json'; // Change this to your actual data file

function updateUser(userId, newData) {
    if (!fs.existsSync(filePath)) {
        console.log("Data file not found.");
        return;
    }

    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (!data.users) {
        console.log("No users found in the file.");
        return;
    }

    let user = data.users.find(user => user.id === userId);
    
    if (!user) {
        console.log("User not found.");
        return;
    }

    Object.assign(user, newData);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log("User updated successfully.");
}

// Example usage
updateUser(1, { name: "Updated Name", age: 30 });
