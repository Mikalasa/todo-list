function bindLoginEvent() {
    const form = document.querySelector('#loginForm')
    form.addEventListener('submit', handleLoginSubmit)
}

function bindRegisterEvent() {
    const form = document.querySelector('#registerForm')
    form.addEventListener('submit', handleRegisterSubmit)
}

function bindCancelEvent() {
    const cancel = document.querySelector('.Login-System-Background')
    cancel.addEventListener('click', handleCancel)
}

function handleLoginSubmit(event) {
    event.preventDefault()
    //log(event)
    const username = document.querySelector('#loginForm [name=username]').value
    const password = document.querySelector('#loginForm [name=password]').value
    //log('username', username, 'password', password)
    ajax_login(username, password)
}

function handleRegisterSubmit(event) {
    event.preventDefault()
    const username = document.querySelector('#registerForm [name=username]').value
    const password = document.querySelector('#registerForm [name=password]').value
    const firstName = document.querySelector('#registerForm [name=firstname]').value
    const lastName = document.querySelector('#registerForm [name=lastname]').value
    ajax_register(username, password, firstName, lastName)
}

function handleCancel(event) {
    const target = event.target
    if (target.classList.contains('login-system-cancel-button')) {
        const backgroundMask = document.querySelector('.Login-System-Background')
        const login = document.querySelector('.Login-System-Login-Box')
        const signup = document.querySelector('.Login-System-Register-Box')
        backgroundMask.classList.add('hide')
        if (login.classList.contains('hide')) {

        } else  {
            login.classList.add('hide')
        }
        if (signup.classList.contains('hide')) {

        } else  {
            signup.classList.add('hide')
        }
    }
}

function printLoginError(error) {
    const errorPrint = document.querySelector('.login-error-display')
    if (errorPrint.classList.contains('hide')) {
        errorPrint.classList.remove('hide')
        errorPrint.textContent = error + '!'
    }
    setTimeout(function () {
        errorPrint.classList.add('hide')
        errorPrint.textContent = ''
    }, 4000)
}

function ajax_login(username, password) {
    const data = new FormData()
    data.append('username', username)
    data.append('password', password)
    //log([...data])
    fetch('api/login_register_api/login.php', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.reload()
            } else {
                console.error('login fail: ' + data.error)
                printLoginError(data.error)
            }
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

function ajax_register(username, password, firstName, lastName) {
    const data = new FormData()
    data.append('username', username)
    data.append('password', password)
    data.append('firstName', firstName)
    data.append('lastName', lastName)
    log([...data])
    fetch('api/login_register_api/register.php', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.reload()
            } else {
                console.error('fail: ' + data.error)
            }
        })
        .catch(error => {
            console.error('Error:', error)
        })
}


function main() {
    bindLoginEvent()
    bindRegisterEvent()
    bindCancelEvent()
}

main()
