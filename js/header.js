function header() {
    const navDOM = document.querySelector('.main-nav');
    const localhost = 'http://localhost:4810/';
    const github = 'https://github.com/AinaEin/48-grupe-dom-events';
    const href = location.hostname === 'localhost' ? localhost : github;

    const HTML = `
        <a href="${href}/">Home</a>
        <a href="${href}/single-button-click">Single button click</a>
        <a href="${href}/counter/">Counter</a>
        <a href="${href}/basketball/">Basketball</a>
        <a href="${href}/virykle/">Virykle</a>
        <a href="${href}/cart/">Prekiu krepselis</a>
        <a href="${href}/clock/">Laikrodis</a>
        <a href="${href}/better-clock/">Geresnis laikrodis</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };