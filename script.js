function testCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = false;
  
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "Here is Cat",
    });
  } else {
    callback("User is here!");
  }
}

testCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
