let subheading = document.getElementsByTagName("h2")[0];
subheading.addEventListener("mouseover", () => { //anonymous function
    subheading.removeAttribute("class");
})

subheading.addEventListener("mouseout", () => {
    subheading.setAttribute("class", "green")
})