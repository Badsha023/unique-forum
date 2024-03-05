// Create .navtitle class
let anotherClass = document.createElement('style');
anotherClass.innerHTML = `
    .navtitle {
        position: relative;
        display: inline-block;
    }
`;

// Create .navtext class
let anotherTextClass = document.createElement('style');
anotherTextClass.innerHTML = `
    .navtitle .navtext {
        visibility: hidden;
        width: 120px;
        background-color:black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -60px;
    }
`;


let afterPseudoElement = document.createElement('style');
afterPseudoElement.innerHTML = `
    .navtitle .navtext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
`;

// Create hover effect
let hoverEffect = document.createElement('style');
hoverEffect.innerHTML = `
    .navtitle:hover .navtext {
        visibility: visible;
    }
`;

// Append styles 
document.head.appendChild(anotherClass);
document.head.appendChild(anotherTextClass);
document.head.appendChild(afterPseudoElement);
document.head.appendChild(hoverEffect);
