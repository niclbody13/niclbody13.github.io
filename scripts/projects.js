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

    textContainer.addEventListener('touchstart', (e) => {
        if(isFilled) {
            startY = e.touches[0].clientY + 100 // Record the initial Y position 
        } else {
            startY = e.touches[0].clientY // Record the initial Y position 
        }
        console.log('startY: ', startY)
    })

    textContainer.addEventListener('touchmove', (e) => {
        distY = e.touches[0].clientY - startY // Calculate the distance swiped

        // Limit the upward swipe to prevent going past the top
        const maxSwipeUp = -projectsHeight + 175 // Maximum upward distance
        const maxSwipeDown = -startY // Maximum downward distance
        // distY = Math.max(distY, maxSwipeUp)
        distY = Math.max(distY, maxSwipeUp) // Prevent swiping too far up
        // distY = Math.min(distY, maxSwipeDown) // Prevent swiping too far down

        textContainer.style.backgroundColor = 'rgba(0, 0, 0, 1)'
        // Apply the vertical translation
        textContainer.style.transform = `translateY(${distY}px)`
    })

    textContainer.addEventListener('touchend', () => {
        console.log('now distY: ', distY, startY)
        if(distY < 0) {
            textContainer.style.overflow = 'scroll'
            // textContainer.style.border = 'none'
            textContainer.style.height = '100%'
            isFilled = true
        } else {
            isFilled = false
            textContainer.style.overflow = 'hidden'
            textContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
            textContainer.style.transform = 'translateY(0)'
            textContainer.style. height = '40%'
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