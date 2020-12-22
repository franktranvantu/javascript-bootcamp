const colorMode = 'dark';

// if (colorMode === 'solarized') {
//     console.log('Solarized mode set!');
//     document.body.style.backgroundColor = 'palegoldenrod';
// } else if (colorMode === 'dark') {
//     console.log('Dark mode set!');
//     document.body.style.backgroundColor = 'black';
// } else {
//     console.log('Light mode set!');
//     document.body.style.backgroundColor = 'ghostwhite';
// }

switch (colorMode) {
    case 'solarized':
        console.log('Solarized mode set!');
        document.body.style.backgroundColor = 'palegoldenrod';
        break;
    case 'dark':
        console.log('Dark mode set!');
        document.body.style.backgroundColor = 'black';
        break;
    default:
        console.log('Light mode set!');
        document.body.style.backgroundColor = 'ghostwhite';
        break;
}