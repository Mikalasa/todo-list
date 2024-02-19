const log = console.log.bind(console)
const error = console.error.bind(console)

function reloadAfterAddNewTodo() {
    const allElements = document.querySelectorAll('.todo-menu-icon-box-active')
    allElements.forEach(el => {
        el.classList.remove('todo-menu-icon-box-active')
    })
    const target = document.querySelector('.todo-menu-list')
    target.parentElement.classList.add('todo-menu-icon-box-active')
    ajax_reloadListLiveTodo()
}

function drawCycleProgress(percent) {
    const circumference = 527.6
    const offset = circumference - (percent / 100) * circumference
    const progressText = document.querySelector('.progress-text')
    progressText.classList.add('progress-text-updating')
    document.querySelector('.progress-ring').style.strokeDashoffset = offset
    setTimeout(() => {
        progressText.textContent = percent + '%'
        progressText.classList.remove('progress-text-updating');
    }, 300)
}

function updateCycleProgress(percent) {
    drawCycleProgress(percent);
}

function reLoadCycleProgress() {
    ajax_getTodoCounts()
}
