var nav = document.querySelector('.nav')

for (let i = 0; i < goodList.length; i++) {
    nav.innerHTML += `<div>${goodList[i].type}</div>`
}