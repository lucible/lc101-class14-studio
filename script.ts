// Write your JavaScript code here.
// Remember to pay attention to page loading!

function launchShuttle (msg : HTMLElement, bg : HTMLElement, ht : HTMLElement) {
    const button = document.getElementById('takeoff')
    let height = 0
    if (button) {
        button.addEventListener('click', () => {
            let status = confirm("Ready to launch the shuttle?")
            if (status) {
                msg.innerHTML = "Shuttle in flight."
                bg.style.backgroundColor = "blue"
                ht.innerHTML = "10000"
            }
        })
    }
}

function landShuttle (msg : HTMLElement, bg : HTMLElement, ht : HTMLElement) {
    const button = document.getElementById('landing')
    if (button) {
        button.addEventListener('click', () => {
            alert('The shuttle is landing. Landing gear engaged.')
            msg.innerHTML = "The shuttle has landed."
            bg.style.backgroundColor = "green"
            ht.innerHTML = "0"
        })
    }
}

function abortMission (msg : HTMLElement, bg : HTMLElement, ht : HTMLElement) {
    const button = document.getElementById('missionAbort')
    if (button) {
        button.addEventListener('click', () => {
            let status = confirm("Readly to abort the mission?")
            if (status) {
                msg.innerHTML = "Mission aborted."
                bg.style.backgroundColor = "green"
                ht.innerHTML = "0"
            }
        })
    }
}

function moveShuttle (rocket : HTMLElement, ht : HTMLElement) {
    let directions = ['Up', 'Down', 'Left', 'Right']
    let movement = [0, 0]
    let buttons = Array.from(document.getElementsByTagName('button')).filter((item) => directions.includes(item.innerHTML))
    buttons.forEach((item) => {
        switch (item.innerHTML) {
            // margin-top minus 10px
            case 'Up' : return item.addEventListener('click', () => {
                movement[0] = movement[0] - 10
                console.log(movement[0])
                rocket.style.marginTop = movement[0] + 'px'
                let height = Number(ht.innerHTML)
                ht.innerHTML = `${height + 10000}`
            })
            // margin-top plus 10px
            case 'Down' : return item.addEventListener('click', () => {
                movement[0] = movement[0] + 10
                rocket.style.marginTop = movement[0] + 'px'
                let height = Number(ht.innerHTML)
                ht.innerHTML = `${height - 10000}`
            })
            // margin-left minus 10px
            case 'Left' : return item.addEventListener('click', () => {
                movement[1] = movement[1] - 10
                rocket.style.marginLeft = movement[1] + 'px'
            })
            // margin-left plus 10px
            case 'Right' : return item.addEventListener('click', () => {
                movement[1] = movement[1] + 10
                rocket.style.marginLeft = movement[1] + 'px'
            })
        }
    })
}

function go () {
    const message = document.getElementById('flightStatus')
    const background = document.getElementById('shuttleBackground')
    const height = document.getElementById('spaceShuttleHeight')
    const shuttle = document.getElementById('rocket')

    if (message && background && height && shuttle) {
        launchShuttle(message, background, height)
        landShuttle(message, background, height)
        abortMission(message, background, height)
        moveShuttle(shuttle, height)
    }
}

window.onload = go;