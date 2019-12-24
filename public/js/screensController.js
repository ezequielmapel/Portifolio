const homeButton = document.querySelector("#home");
const projectsWebButton = document.querySelector("#projectsWeb");
const projectsMobileButton = document.querySelector("#projectsMobile");

homeButton.addEventListener('click', onHomeButtonClick);
projectsWebButton.addEventListener('click', onProjectsWebButtonClick);
projectsMobileButton.addEventListener('click', onProjectsMobileButtonClick);

function onHomeButtonClick(){
    changeActiveScreen('home');
}
function onProjectsWebButtonClick(){
    changeActiveScreen('projectsWeb');
}
function onProjectsMobileButtonClick(){
    changeActiveScreen('projectsMobile');
}


function changeActiveScreen(active){
    const buttonActive = document.querySelector(`#${active}`);
    const listButtons = document.querySelector('ul#listbuttons');
    const countButtons = listButtons.childElementCount;
    for(let i=0;i<countButtons;i++){
        const button = listButtons.children[i];
        button.classList = "";
    }

    buttonActive.classList = "active";
    
}

