
function showMenu() {
    const hambergerIcon = document.getElementById('ham-li');
    hambergerIcon.style.display = hambergerIcon.style.display == 'block' ? 'none' : 'block';
    hambergerIcon.style.position = 'absolute';
    hambergerIcon.style.top = '4em';
    hambergerIcon.style.right = '5%';
}

// Type Write Effect
const text = "<I'm a web developer>";
let index = 0;
const speed = 200;

function typeWritter() {
    if(index<text.length) {
        document.getElementById('type-writter').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWritter,speed);
    }
}

window.onload = typeWritter;

// Show more in experience section
function showMore(type) {
    const paraMore = document.getElementById('para-more');
    const paraLess = document.getElementById('para-less');
    const divider = document.getElementById('divider');

    if(type == 'more') {
        paraMore.style.display= 'block';
        paraLess.style.display= 'none';
        divider.style.top = '15%';
        divider.style.height = '68%';
    } else {
        paraMore.style.display= 'none';
        paraLess.style.display= 'block';
        divider.style.top = '12%';
        divider.style.height = '67.5%';
    }
}

function scrollBar(this1) {

    var sectionId = this1.textContent.trim().toLowerCase();

    var targetSectionId = document.getElementById(sectionId);
    const hambergerIcon = document.getElementById('ham-li');
    hambergerIcon.style.display = 'none'

    var id = setInterval(function () {
        var coordinates = targetSectionId.getBoundingClientRect();

        if (coordinates.top <= 100) {
            clearInterval(id);
            return;
        }
        window.scrollBy(0, 50)
    }, 20)
}

// Change Theme
function changeTheme(themeType) {
    const sections = document.getElementsByClassName('theme');
    const body = document.getElementById('body');
    const brightIcon = document.getElementById('bright');
    const darkIcon = document.getElementById('moon');
    const bodyHeader = document.getElementById('body-header');
    const brightDarkTheme = document.getElementById('bright-dark-theme');

    if(themeType === 'dark') {
        let i = 0;
        for(let theme of sections) {
            if(i%2 == 0)theme.style.backgroundColor = 'black';
            else {
                theme.style.backgroundColor = '#4d4a4a';
            }
            i++;
        }
        brightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
        bodyHeader.style.backgroundImage = "url('assets/portfolio-bg1.jpg')";
        brightDarkTheme.style.backgroundColor = "#ffffff";
    } else {
        let i = 0;
        for(let theme of sections) {
            if(i%2 == 0)theme.style.backgroundColor = 'white';
            else {
                theme.style.backgroundColor = 'rgb(236, 232, 232)';
            }
            i++;
        }
        darkIcon.style.display = 'none';
        brightIcon.style.display = 'block';
        bodyHeader.style.backgroundImage = "url('https://ninjasfiles.s3.amazonaws.com/asset_0000000000000020_1549743985_macbook_mouse.jpg')";
        brightDarkTheme.style.backgroundColor = "#535547";
    }   
}

// Skill bars
// var animationDone =false; Aniamtion daone wala logic isn't here

var skillBars = document.querySelectorAll('.div >div')
var skillsContainer = document.getElementById('display-skills');
window.addEventListener('scroll', scrollCheck);

function initializeZero(bar) {
    bar.setAttribute('data-visited',false);
    bar.style.width = 0 + '%'
}

for (let bar of skillBars) {
    initializeZero(bar);
}

function fillBar(bar) {

        let targetWidth = bar.getAttribute('bar-width');
        let currentWidth = 0;
        let id = setInterval(function () {
            if (currentWidth >= targetWidth) {
                clearInterval(id);
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5)


}


function scrollCheck() {
   
    for (let bar of skillBars)
    {
        let coordinates = bar.getBoundingClientRect();
        if((bar.getAttribute('data-visited')=='false') && (coordinates.top <= window.innerHeight))
        {
           bar.setAttribute('data-visited',true);
            fillBar(bar);
        }
        else if (coordinates.top > window.innerHeight)
        {
            bar.setAttribute('data-visited',true);
            initializeZero(bar);
        }
    }
}

// Portfolio

function goToProject(projectName) {
    switch (projectName) {
        case 'netflix' : 
            window.open('https://frontendassignmentcode.onrender.com/#/browse','_blank');
            break;
        case 'expenseTracker': 
            window.open('https://expensetracker-jubb.onrender.com','_blank');
            break;
        case 'toDo': 
            window.open('https://github.com/abhi-shimpi/TO-Do.git','_blank');
            break;
        case 'chatBot': 
            window.open('https://github.com/abhi-shimpi/ChatBotUsing-GPT.git','_blank');
            break;
        case 'portfolio': 
            window.open('https://github.com/abhi-shimpi/PersonalPortfolio.git','_blank');
            break;

    }
}