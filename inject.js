const newStyles = document.createElement("style")
newStyles.innerHTML = `:root {
    --angle: calc(-255deg);
}

html {
    height: 100%;
}

body {
    height: 100%;
    background-color: black;
    margin: 0px;
    overflow: hidden;
}

@keyframes fall {
    from {
        visibility: visible;
        transform: translate(0px, 0px) rotate(var(--angle));
    }

    to {
        visibility: visible;
        transform: translate(-32.153903091734714vh, 120vh) rotate(var(--angle));
    }
}

.drop {
    position: absolute;
    width: 40px;
    height: 2.5px;
    opacity: .8;
    background-color: white;
    visibility: hidden;

    animation: fall 1s linear 0s 1000000000;
}`

document.body.appendChild(newStyles)

const rainDropCount = 200
const rainDrops = []

const fallangle = 225

for (var i = 0; i < rainDropCount; i++)
{
    const drop = document.createElement("div")
    drop.classList.add("drop")
    document.body.appendChild(drop)
    drop.style.left = Math.random()*200+"%"
    drop.style.top = "-20px"
    drop.style.animationDelay = Math.random()*5 + "s"
}