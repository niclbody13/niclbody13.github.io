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