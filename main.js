const h2 = document.querySelectorAll('.maintxt')
const p = document.querySelectorAll('.hidetxt')
const icon = document.querySelectorAll('.arrow')

for (let i = 0; i < h2.length; i++) {
    h2[i].addEventListener('click', function () {
        p[i].classList.toggle('show')
        h2[i].classList.toggle('bold')
        icon[i].classList.toggle('rot')
        for (let j = 0; j < h2.length; j++) {
            if (j !== i) {
                p[j].classList.remove('show')
                h2[j].classList.remove('bold')
            }
        }

    })
}
for (let i = 0; i < h2.length; i++) {
    icon[i].addEventListener('click', function () {
        p[i].classList.toggle('show')
        h2[i].classList.toggle('bold')
        icon[i].classList.toggle('rot')
        for (let j = 0; j < h2.length; j++) {
            if (j !== i) {
                p[j].classList.remove('show')
                h2[j].classList.remove('bold')
            }
        }
    })
}