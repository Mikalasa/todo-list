function bindProfileEvent() {
    const profile = document.querySelector('.Profile')
    profile.addEventListener('click', handleProfile)
}

function handleProfile(event) {
    const target = event.target
    //log(event)
    if (target.classList.contains('profile-signup-button')) {
        const backgroundMask = document.querySelector('.Login-System-Background')
        const signup = document.querySelector('.Login-System-Register-Box')
        backgroundMask.classList.remove('hide')
        signup.classList.remove('hide')
    }
    if (target.classList.contains('profile-login-button')) {
        const backgroundMask = document.querySelector('.Login-System-Background')
        const login = document.querySelector('.Login-System-Login-Box')
        backgroundMask.classList.remove('hide')
        login.classList.remove('hide')
    }
}


function main() {
    bindProfileEvent()
}

main()
