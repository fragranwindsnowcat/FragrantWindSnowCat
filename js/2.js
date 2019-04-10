<!-- Begin

n = (document.layers) ? 1:0
ie = (document.all) ? 1:0
function play_sound() {
    if (n) document.thesound.play(false)
    if (ie) {
        document.thesound.stop()
        document.thesound.play()
    }
}
function stop_sound() {
    document.thesound.stop()
}

// End -->
