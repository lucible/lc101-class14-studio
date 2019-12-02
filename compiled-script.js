"use strict";
// Write your JavaScript code here.
// Remember to pay attention to page loading!
function launchShuttle(msg, bg, ht) {
    var button = document.getElementById('takeoff');
    var height = 0;
    if (button) {
        button.addEventListener('click', function () {
            var status = confirm("Ready to launch the shuttle?");
            if (status) {
                msg.innerHTML = "Shuttle in flight.";
                bg.style.backgroundColor = "blue";
                ht.innerHTML = "10000";
            }
        });
    }
}
function landShuttle(msg, bg, ht) {
    var button = document.getElementById('landing');
    if (button) {
        button.addEventListener('click', function () {
            alert('The shuttle is landing. Landing gear engaged.');
            msg.innerHTML = "The shuttle has landed.";
            bg.style.backgroundColor = "green";
            ht.innerHTML = "0";
        });
    }
}
function abortMission(msg, bg, ht) {
    var button = document.getElementById('missionAbort');
    if (button) {
        button.addEventListener('click', function () {
            var status = confirm("Readly to abort the mission?");
            if (status) {
                msg.innerHTML = "Mission aborted.";
                bg.style.backgroundColor = "green";
                ht.innerHTML = "0";
            }
        });
    }
}
function moveShuttle(rocket, ht) {
    var directions = ['Up', 'Down', 'Left', 'Right'];
    var movement = [0, 0];
    var buttons = Array.from(document.getElementsByTagName('button')).filter(function (item) { return directions.includes(item.innerHTML); });
    buttons.forEach(function (item) {
        switch (item.innerHTML) {
            // margin-top minus 10px
            case 'Up': return item.addEventListener('click', function () {
                movement[0] = movement[0] - 10;
                rocket.style.marginTop = movement[0] + 'px';
                var height = Number(ht.innerHTML);
                ht.innerHTML = "" + (height + 10000);
            });
            // margin-top plus 10px
            case 'Down': return item.addEventListener('click', function () {
                movement[0] = movement[0] + 10;
                rocket.style.marginTop = movement[0] + 'px';
                var height = Number(ht.innerHTML);
                ht.innerHTML = "" + (height - 10000);
            });
            // margin-left minus 10px
            case 'Left': return item.addEventListener('click', function () {
                movement[1] = movement[1] - 10;
                rocket.style.marginLeft = movement[1] + 'px';
            });
            // margin-left plus 10px
            case 'Right': return item.addEventListener('click', function () {
                movement[1] = movement[1] + 10;
                rocket.style.marginLeft = movement[1] + 'px';
            });
        }
    });
}
function go() {
    var message = document.getElementById('flightStatus');
    var background = document.getElementById('shuttleBackground');
    var height = document.getElementById('spaceShuttleHeight');
    var shuttle = document.getElementById('rocket');
    if (message && background && height && shuttle) {
        launchShuttle(message, background, height);
        landShuttle(message, background, height);
        abortMission(message, background, height);
        moveShuttle(shuttle, height);
    }
}
window.onload = go;
