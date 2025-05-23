/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: "Ellie",
  friendCounter: 0,
  posts: [],
  postMessage: function (message) {
    this.posts.push(message);
  },
  deleteMessage: function (index) {
    if (index >= 0 && index < this.posts.length) {
      this.posts.splice(index, 1);
    } else {
      console.log("Message not found.");
    }
  },
  addFriend: function () {
    this.friendCounter++;
  },
  removeFriend: function () {
    if (this.friendCounter > 0) {
      this.friendCounter--;
    } else {
      console.log("There's no friends");
    }
  },
};

facebookProfile.postMessage("Hello");
console.log(facebookProfile);
facebookProfile.deleteMessage(0);
console.log(facebookProfile);
facebookProfile.addFriend();
console.log(facebookProfile);
facebookProfile.removeFriend();
console.log(facebookProfile);
