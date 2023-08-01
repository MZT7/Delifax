try {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchell",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  });
  // console.log(response.status);
  // if (!response.ok) {
  //   throw new Error(response.status);
  // }
  // router.push("auth/company/home");
  // alert(JSON.stringify(e));
  const res = response.json();
  setAuth(res);
  router.push("auth/company/home");
  // console.log("userData", auth?.email);
} catch (err) {
  // router.push("guest/register");
  console.log("err", err.message);
  if (!err) {
    setError("No server response");
  } else if (err.message == 400) {
    setError("Missing Username or Password");
  } else if (err.message == 401) {
    setError("Unauthorized");
  } else {
    setError("Login failed");
  }
}

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "kminchelle",
    password: "0lelplR",
    // expiresInMins: 60, // optional
  }),
})
  .then((res) => res.json())
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
