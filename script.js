const dom = document.body;

// const grandparent = document.querySelector(".grandparent")

// createPTagWithStyle(grandparent,"green","This is grand-parent!")

const parent = document.querySelectorAll(".parent")

const gp = parent[0].closest(".grandparent")

createPTagWithStyle(gp,"green","This is grand-parent!")

createPTagWithStyle(parent[0],"red","This is parent 1!")
createPTagWithStyle(parent[1],"red","This is parent 2!")

function createPTagWithStyle(parent,color,text){
    parent.style.backgroundColor = color
    parent.style.margin = "100px 100px 100px 100px"
    parent.style.padding = "100px 100px 100px 100px"

    const ptag = document.createElement("p")

    ptag.innerText = text
    ptag.style.textAlign = "center"
    ptag.style.color = "white"
    ptag.style.fontSize = "24px"

    parent.append(ptag)
}