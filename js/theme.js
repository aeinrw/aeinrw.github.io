function setTheme() {
    const now = (new Date()).getHours();
    const prev = Number(localStorage.getItem('oldHour'));

    if (prev !== now) {
        localStorage.setItem('oldHour', now);
        if (now > 7 && now < 18) {
            localStorage.setItem("isDark", "false");
            document.body.classList.remove('dark');
        } else {
            localStorage.setItem("isDark", "true");
            document.body.classList.add('dark');
        }
    } else {
        if (localStorage.getItem('isDark') == "true") {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
}
function switchTheme() {
    if (localStorage.getItem('isDark') == "true") {
        localStorage.setItem('isDark', "false");
        document.body.classList.remove('dark');
    } else {
        localStorage.setItem('isDark', "true");
        document.body.classList.add('dark');
    }
}