const dom = document.body;

const hello = document.createElement("p");

hello.innerText = "Hello everyone!";

hello.style.color = "black";

const div = document.createElement("div");

div.style.textAlign = "center"

const well = document.createElement("p");

well.innerText = "Hope you guys are well!"

well.style.color = "white";
well.style.backgroundColor = "black"

const link = document.createElement("button")

link.innerHTML = "<a style='color:white' href='https://www.youtube.com/watch?v=y17RuWkWdn8&ab_channel=WebDevSimplified'>Click me to open YT</a>"

link.classList.add("btn-primary")

div.append(hello)
div.append(well)
div.append(link)

dom.append(div)
