

let menu_icon = document.querySelector(".menu-icon i")
let nav_list = document.querySelector(".navlist")

nav_list.style.maxHeight = "0";

menu_icon.addEventListener("click" , () => {
    if(nav_list.style.maxHeight === "0px" || nav_list.style.maxHeight === "")
    {
        nav_list.style.maxHeight = "350px";
    }
    else{
        nav_list.style.maxHeight = "0";
    }
})

// Remove Navbar

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a [href*=' + id + ']').classList.add("active");
            });
        };
    });
};

// const activepage = window.location.pathname;
// const navlink = document.querySelectorAll('nav a').
// forEach(link => {
//     if(link.href.includes('${activepage}')){
//         link.classList.add('active');
//     }
// })

document.onclick = function(e){
    if(!menu_icon.contains(e.target) && !nav_list.contains(e.target) ){
        menu_icon.classList.remove("active");
        nav_list.classList.remove("active");
    }
}