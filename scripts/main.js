const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

function main() {
    player.update()

    clearBackground("white")

    player.draw()

    requestAnimationFrame(main)
}

main()
