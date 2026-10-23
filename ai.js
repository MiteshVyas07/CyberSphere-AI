function askAI(){

let question =
document.getElementById(
"userQuestion"
).value.toLowerCase();

let answer = "";

if(question.includes("phishing")){

answer =
"Phishing is a cyber attack where attackers trick users into revealing passwords, OTPs or personal information using fake emails and websites.";

}

else if(question.includes("malware")){

answer =
"Malware is malicious software designed to damage devices, steal data or gain unauthorized access.";

}

else if(question.includes("ransomware")){

answer =
"Ransomware encrypts files and demands payment to unlock them.";

}

else if(question.includes("firewall")){

answer =
"A firewall monitors and filters incoming and outgoing network traffic to improve security.";

}

else if(question.includes("encryption")){

answer =
"Encryption converts readable information into encoded data that cannot be understood without a key.";

}

else if(question.includes("password")){

answer =
"Use long passwords containing uppercase letters, lowercase letters, numbers and symbols.";

}

else{

answer =
"Sorry, I don't know that yet. Future versions of CyberSphere AI will include a real AI model.";

}

document.getElementById(
"aiResponse"
).innerHTML =
`<p>${answer}</p>`;

}