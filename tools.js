// PASSWORD GENERATOR

function generatePassword(){

let length =
document.getElementById("passwordLength").value;

let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password = "";

for(let i=0;i<length;i++){

password += chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

document.getElementById(
"passwordOutput"
).value = password;

}


// PASSWORD STRENGTH

function checkStrength(){

let password =
document.getElementById(
"strengthInput"
).value;

let result =
document.getElementById(
"strengthResult"
);

if(password.length < 6){

result.innerHTML =
"Strength: Weak";

result.style.color = "red";
}

else if(password.length < 10){

result.innerHTML =
"Strength: Medium";

result.style.color = "orange";

}

else{

result.innerHTML =
"Strength: Strong";

result.style.color = "limegreen";

}

}


// URL CHECKER

function checkURL(){

let url =
document.getElementById(
"urlInput"
).value;

let result =
document.getElementById(
"urlResult"
);

if(url.startsWith("https://")){

result.innerHTML =
"✅ Secure HTTPS Website";

result.style.color =
"limegreen";

}

else if(url.startsWith("http://")){

result.innerHTML =
"⚠ Not Secure (HTTP)";

result.style.color =
"orange";

}

else{

result.innerHTML =
"❌ Invalid URL";

result.style.color =
"red";

}

}


// SHA256 HASH

async function generateHash(){

let text =
document.getElementById(
"hashInput"
).value;

let encoder =
new TextEncoder();

let data =
encoder.encode(text);

let hashBuffer =
await crypto.subtle.digest(
"SHA-256",
data
);

let hashArray =
Array.from(
new Uint8Array(hashBuffer)
);

let hashHex =
hashArray
.map(b=>b.toString(16).padStart(2,"0"))
.join("");

document.getElementById(
"hashOutput"
).value = hashHex;

}


// TIP GENERATOR

const tips = [

"Use strong passwords.",
"Enable Two Factor Authentication.",
"Never share OTPs.",
"Keep software updated.",
"Avoid suspicious links.",
"Use a password manager.",
"Backup your important files.",
"Verify email senders carefully."

];

function showTip(){

let randomTip =
tips[Math.floor(
Math.random()*tips.length
)];

document.getElementById(
"tipOutput"
).innerHTML = randomTip;

}