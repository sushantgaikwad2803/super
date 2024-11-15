
//open navbar
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
let htmlbody = document.querySelector(".short-body");
htmlbody.addEventListener("click" , () => {
     nav_list.style.maxHeight = "0";
});

//hover effect
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
                nav_list.style.maxHeight = "0";
            });
        };
    });
};
