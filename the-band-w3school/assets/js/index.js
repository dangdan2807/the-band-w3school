// change image
var sliderInfo = [
    {
        urlImg: "./assets/img/slider1.jpg",
        heading: "Los Angeles",
        description: "We had the best time playing at Venice Beach!",
    },
    {
        urlImg: "./assets/img/slider2.jpg",
        heading: "New York",
        description: "The atmosphere in New York is lorem ipsum.",
    },
    {
        urlImg: "./assets/img/slider3.jpg",
        heading: "Chicago",
        description: "Thank you, Chicago - A night we won't forget.",
    },
];

var index = 0;

function changeImages() {
    if (index > 2) index = 0;
    var sliderElement = document.getElementsByClassName("slider")[0];
    var sliderHeading = document.getElementsByClassName("text-heading")[0];
    var sliderDescription =
        document.getElementsByClassName("text-description")[0];
    sliderElement.style.backgroundImage =
        "url(" + sliderInfo[index].urlImg + ")";
    sliderHeading.innerHTML = sliderInfo[index].heading;
    sliderDescription.innerHTML = sliderInfo[index].description;
    index++;
}
setInterval(changeImages, 3000);

// event onclick mobile menu btn
var headerElement = document.getElementsByClassName("header")[0];
var mobileMenu = document.getElementsByClassName("mobile-menu-btn")[0];
var headerHeight = headerElement.clientHeight;

mobileMenu.onclick = function () {
    var isClose = headerElement.clientHeight === headerHeight;
    if (isClose) {
        headerElement.style.height = "auto";
    } else {
        headerElement.style.height = null;
    }
};

// event onclick menu item
var menuItems = document.querySelectorAll('.nav a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav__list');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            headerElement.style.height = null;
        }
    };
}
