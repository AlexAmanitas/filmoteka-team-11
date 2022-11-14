let changeThemeButtons = document.querySelectorAll('.changeTheme'); 
let body = document.querySelector("body");


let count = 0;

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        // setTheme(target.checked ? 'Dark' : 'Light')
        if (count % 2 == 0) {
            body.style.setProperty('background-color', '#202025');
            count++;
        } else { 
            body.style.setProperty('background-color', '#FCFCFC');
            count++;
        }
        let theme = this.dataset.theme; 
        applyTheme(theme); 
    });

});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]'); 
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; 
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';

}
 
console.log('applyTheme');