

var typed = new Typed('.multiple', {
    strings:[ " Conception UX | UI", " Développement logiciel", "Développement Web et applications mobiles"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function openTab(tabname) 
{
    for(let tabLink of tabLinks)
    {
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents)
    {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu()
{
    sidemenu.style.right = "0";
}

function closemenu()
{
    sidemenu.style.right = "-200px";
}