function ajax_getTodoCounts() {
    fetch('api/statistics_api/get_countDifferent.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                updateTodoCount(data.data)
            } else {
                console.error('Error retrieving todo counts: ' + data.error)
            }
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

function fadeOutElement(element) {
    element.classList.add('process-bar-card-content-hide')
}

function fadeInElement(element, newValue) {
    // 等待 fadeOut 动画完成
    setTimeout(() => {
        element.textContent = newValue
        element.classList.remove('process-bar-card-content-hide')
        element.classList.add('process-bar-card-content-show')
        // 等待 fadeIn 动画完成后移除类
        setTimeout(() => {
            element.classList.remove('process-bar-card-content-show')
        }, 300)
    }, 300)
}

function updateTodoCount(todoCounts) {
    const liveCount = todoCounts['live'] || 0
    const completeCount = todoCounts['complete'] || 0
    const deleteCount = todoCounts['delete'] || 0

    const liveElement = document.querySelector('.process-bar-card-content-allLive')
    const completeElement = document.querySelector('.process-bar-card-content-allComplete')
    const deleteElement = document.querySelector('.process-bar-card-content-allDelete')

    fadeOutElement(liveElement)
    fadeOutElement(completeElement)
    fadeOutElement(deleteElement)

    fadeInElement(liveElement, liveCount);
    fadeInElement(completeElement, completeCount)
    fadeInElement(deleteElement, deleteCount)

    const numberLiveCount = parseInt(liveCount)
    const numberCompleteCount = parseInt(completeCount)
    const numberDeleteCount = parseInt(deleteCount)
    let percent = ((numberCompleteCount / (numberLiveCount + numberCompleteCount)) * 100).toFixed(1)
    updateCycleProgress(percent)
    //log(liveCount, completeCount, deleteCount, percent)
}



function main() {
    ajax_getTodoCounts()
}

main();
