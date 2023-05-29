const contain = document.querySelector(".refresh-btn")
const refreshBtn = document.querySelector(".refresh-btn")
const maxCode = 3

// Generador de colores en Hex
const generatePalette = () => {
contain.innerHTML = ""
for(let i = 0; i < maxCode; i++){
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
    randomHex = `#${randomHex.padStart(6, "0")}`
    //console.log(randomHex) 
    
    const color = document.createElement("li")
    color.classList.add("color")
    color.innerHTML = `
    <div class="marker" style="background: ${randomHex}">
        <div class="cap"></div>
        <div class="sleeve"></div>
    </div>
    `
    contain.appendChild(color)
}
}

generatePalette()

refreshBtn.addEventListener("click", generatePalette)
