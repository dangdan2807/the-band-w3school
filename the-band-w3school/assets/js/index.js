var sliderInfo = [
    {
        urlImg: "/assets/img/slider1.jpg",
        heading: 'Los Angeles',
        description: 'We had the best time playing at Venice Beach!'
    },
    {
        urlImg: "/assets/img/slider2.jpg",
        heading: 'New York',
        description: 'The atmosphere in New York is lorem ipsum.'
    },
    {
        urlImg: "/assets/img/slider3.jpg",
        heading: 'Chicago',
        description: "Thank you, Chicago - A night we won't forget."
    }
];

var index = 0;

function changeImages() {
    if (index > 2)
        index = 0;
    var sliderElement = document.getElementsByClassName('slider')[0];
    var sliderHeading = document.getElementsByClassName('text-heading')[0];
    var sliderDescription = document.getElementsByClassName('text-description')[0];
    sliderElement.style.backgroundImage = 'url(' + sliderInfo[index].urlImg + ')';
    sliderHeading.innerHTML = sliderInfo[index].heading;
    sliderDescription.innerHTML = sliderInfo[index].description;
    index++;
}

setInterval(changeImages, 3000);
