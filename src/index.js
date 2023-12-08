function changeTheme() {
    let body= document.querySelector("body");
    if (body.classList.contains("dark")){
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }
}

let themeButton = document.querySelector(".theme-button");// 1 Schritt
themeButton.addEventListener("click", changeTheme);// 2. Schritte hier ist changeTheme die function die wir dann im 3. Schritt erstellen wollen