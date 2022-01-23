function func(id) {
    let ID = id + 'drop';
    let drop = document.getElementById(ID);
    if (drop.style.visibility === 'hidden') {
        drop.style.visibility = 'visible'
    } else {
        drop.style.visibility = 'hidden'
    }
}
