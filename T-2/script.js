function getCurrentDate(){
    const date = new Date();

    return date.toLocaleString();
}

const dateLabel = document.getElementById("dateLabel")

dateLabel.innerText = getCurrentDate();