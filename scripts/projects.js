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


const textContainers = document.querySelectorAll('.textContainer')
const projectsHeight = document.querySelector('.project').offsetHeight
console.log('projects: ', projectsHeight)
let startY
let distY = 0
let isFilled = false

textContainers.forEach((textContainer) => {
    // let lastY = 0
    textContainer.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY // Record the initial Y position 
        console.log('startY: ', startY)
    })

    textContainer.addEventListener('touchmove', (e) => {
        distY = (e.touches[0].clientY - startY) // Calculate the distance swiped
        console.log("distance swiped: ", distY)
        // textContainer.style.height = '100%'

        const scrollTop = textContainer.scrollTop
        const scrollHeight = textContainer.scrollHeight
        const offsetHeight = textContainer.offsetHeight
    
        const atTop = scrollTop === 0 // Check if at the top of the container
        const atBottom = scrollTop + offsetHeight >= scrollHeight // Check if at the bottom of the container
    
        if (atTop && e.touches[0].clientY > startY) {
            // User is at the top and trying to scroll up, prevent page scrolling
            console.log("Preventing default scroll at top")
            e.preventDefault()
        } else if (atBottom && e.touches[0].clientY < startY) {
            // User is at the bottom and trying to scroll down, prevent page scrolling
            console.log("Preventing default scroll at bottom")
            e.preventDefault()
        }

        // Limit the upward swipe to prevent going past the top
        const maxSwipeUp = -projectsHeight + 176 // Maximum upward distance
        console.log("max swipe: ", maxSwipeUp)
        const maxSwipeDown = startY // Maximum downward distance
        if(distY < 0) {
            // distY = Math.min(distY, -106)
            distY = -0.01  // minimal distance because height will go from 40% - 100%
        } else {
            if(distY > 75) {
                distY = Math.min(distY, 106)
                // distY = 106
            } else {
                distY = 0
            }
        }

        console.log("distY: ", distY)
        textContainer.style.backgroundColor = 'rgba(0, 0, 0, 1)'
        // Apply the vertical translation
        textContainer.style.transform = `translateY(${distY}px)`
        textContainer.style.transform = 'translateY(0)'
    })

    textContainer.addEventListener('touchend', () => {
        console.log('now distY: ', distY, startY)
        if(distY < 0) {
            textContainer.style.overflow = 'scroll'
            // textContainer.style.border = 'none'
            textContainer.style.height = '100%'
            isFilled = true
        } else if(distY > 0) {
            textContainer.style.overflow = 'hidden'
            textContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
            textContainer.style. height = '40%'
            isFilled = false
        }
        distY = 0
    })
})

// loop through projects and create a switch statement to assign the correct url to each project

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

let starWars = document.getElementById('starWarsWiki')

starWars.addEventListener('click', () => {
    const url = 'https://github.com/niclbody13/StarWarsWiki'
    window.location.href = url
})