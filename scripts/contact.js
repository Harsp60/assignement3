// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", function () {
    const message = document.createElement("p");
    let main = document.getElementById("contact-page");

    message.innerHTML = "Thank you for your message";
    message.style.fontSize = "24px";
    message.style.marginLeft = "100px";

    main.innerText = null;
    main.appendChild(message);
})