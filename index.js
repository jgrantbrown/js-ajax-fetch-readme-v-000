const app = "I don't do much.";

const token = c3c3deb121cca574cfa2166fd7e9355100392d4c
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
