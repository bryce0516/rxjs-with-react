export function fakeAuth(username, password) {
  console.log("this isfake auth ", username, password, username === "foo");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (username === "foo") {
        if (password === "bar") {
          return resolve({ username });
        }
        return reject(new Error("패스워드가 틀렸습니다."));
      }
      return reject(new Error("없는 아이디입니다."));
    }, 1000);
  });
}
