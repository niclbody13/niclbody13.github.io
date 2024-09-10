let project = document.querySelectorAll('.project')
project.forEach(project => {
    project.addEventListener('mouseover', function() {
        project.children[0].style.display = 'block'
        project.children[0].style.animation = 'appear 0.5s ease-in'
    })
    project.addEventListener('mouseleave', function() {
        project.children[0].style.display = 'none'
        project.children[0].style.animation = 'disappear 0.5s ease-out'
    })
})

let wumpus = document.getElementById('wumpus')

wumpus.addEventListener('click', () => {
    const url = 'https://github.com/niclbody13/Hunt-The-Wumpus'
    window.location.href = url
})

let minecraft = document.getElementById('minecraft')

minecraft.addEventListener('click', () => {
    const url = 'https://github.com/niclbody13/MinecraftServerAutomation'
    window.location.href = url
})

let edir = document.getElementById('edir')

edir.addEventListener('click', () => {
    const url = 'https://impactstudio.oregonstate.edu/edir'
    window.location.href = url
})

let tv = document.getElementById('tv')

tv.addEventListener('click', () => {
    const url = 'https://github.com/niclbody13/TV-Review'
    window.location.href = url
})