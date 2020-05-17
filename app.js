//localStorage e deja un obiect


const radioBtns = document.getElementsByName("language");

//ne luam obj
const localObj = localStorage;
console.log(localObj.language);

//parcurge butoanele
for (let i = 0; i < radioBtns.length; i++) {
    //daca valoarea checked de utilizator e egala cu cea din localStorage sa ramana checked
    if (radioBtns[i].value === localObj.language) {
    radioBtns[i].checked = "checked";
}
    //la click event se seteaza language in localStorage
    radioBtns[i].addEventListener("click", (event) => {
        localStorage.setItem("language", `${event.target.value}`);
        console.log(event.target.value);
    })
}



