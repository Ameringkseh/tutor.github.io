document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#ff0000", "#ff7300", "#ffeb00", "#47ff00", "#00ffee", "#0011ff", "#7700ff", "#ff00aa"];
    let index = 0;

    function changeBackground() {
        document.body.style.background = colors[index];
        index = (index + 1) % colors.length;
        setTimeout(changeBackground, 2000);
    }

    changeBackground();
});
