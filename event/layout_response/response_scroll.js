function bindResponseScrollEvent() {
    const todoDisplay = document.querySelector('.CONTAINER-RESPONSE-BOX')
    todoDisplay.addEventListener('scroll', function() {
        todoDisplay.classList.add('scrolling')
        clearTimeout(todoDisplay.scrollTimeout)
        todoDisplay.scrollTimeout = setTimeout(() => {
            todoDisplay.classList.remove('scrolling')
        }, 500);
    })
}

function main() {
    bindResponseScrollEvent()
}

main()