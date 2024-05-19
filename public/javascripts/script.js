let tl = gsap.timeline()

// Locomotive 
function Locomotive() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

}
Locomotive()

// Loader
const loaderPage = () => {
    function time() {
        var a = 0;
        const loadingVal = setInterval(() => {
            a = a + Math.floor(Math.random() * 15);
            if (a < 100) {
            }
            else {
                a = 100;
                clearInterval(loadingVal);
            }
        }, 100);
    }
    function loader() {
        tl.to("#loader h1", {
            delay: 1,
            duration: 1,
            onStart: time()
        })
        tl.to("#loader", {
            top: "-100vh",
        })
    }
    loader();
}
loaderPage()


// This increases the speed in the Swiper (PlaybackSpeed)
document.querySelector('video').playbackRate = 6;

// Swiper.JS (Hero Section)
const swiper = () => {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 1,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


}
swiper();



// Micro - Interaction Marvel Studios
function MicroMarvelStudios(){
    document.querySelector('.marvelStudios').addEventListener('mouseover', function () {
        console.log('moveover');
        document.querySelector('.marvelStudios video').style.display = 'initial';
        document.querySelector('.marvelStudios video').style.transition = 'opacity 0.3s ease';
        document.querySelector('.marvelStudios video').style.opacity = '1';
    });
    document.querySelector('.marvelStudios').addEventListener('mouseleave', function () {
    
        console.log('moveover');
        document.querySelector('.marvelStudios video').style.display = 'none';
    
        document.querySelector('.marvelStudios video').style.transition = 'opacity 0.3s ease';
    });
}

MicroMarvelStudios()


// FirstRowVideos
function firstRowvideos() {
    const firstLeftVideo = document.querySelector('.firstleftvideo');
    firstLeftVideo.pause();

    document.querySelector('.firstleft').addEventListener('mouseover', () => {

        gsap.to('.firstleft', {

            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onStart: () => {
                let hover_msg = document.getitementById("over-lay");
                hover_msg.innerText = "";
            }

        })
        firstLeftVideo.play();
    });
    document.querySelector('.firstleft').addEventListener('mouseleave', () => {
        gsap.to('.firstleft', {
            opacity: 0.5,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                let hover_msg = document.getElementById("over-lay");
                hover_msg.innerText = "Hover me see magic!!";
            }

        });

        firstLeftVideo.pause();
    });

    const videoElement = document.querySelector('.firstRightvideo');
    console.log("Clicked")
    videoElement.pause();
    document.querySelector('.firstright').addEventListener('mouseover', () => {
        gsap.to('.firstright', {

            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onStart: () => {
                let hover_msg = document.getElementById("over-lay");
                hover_msg.innerText = "";
            }

        })
        videoElement.play();
    });
    document.querySelector('.firstright').addEventListener('mouseleave', () => {
        videoElement.pause();
        gsap.to('.firstright', {
            opacity: 0.5,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                let hover_msg = document.getElementById("over-lay");
                hover_msg.innerText = "Hover me see magic!!";
            }

        });
    });

}
firstRowvideos()

// Marquee Effect
function marque(){
    let marqueeImages = [
        { img: 'https://i.pinimg.com/564x/37/08/02/37080265d180367f022559bb41ccd7bc.jpg' },
        { img: 'https://i.pinimg.com/564x/b7/cb/81/b7cb81431848a619680a789f5a03a89c.jpg' },
        { img: 'https://i.pinimg.com/564x/c9/fd/01/c9fd01c751bfd54fa146f8740c9071ca.jpg' },
        { img: 'https://i.pinimg.com/564x/bf/90/d1/bf90d1d2446eab5d8a8a8ec7056270c4.jpg' },
        { img: 'https://i.pinimg.com/564x/2a/97/65/2a9765f1326f4ec9a216fea4ed27f9ae.jpg' },
        { img: 'https://i.pinimg.com/564x/4a/6b/0c/4a6b0c24428a6f9a47fcae777d15e52b.jpg' },
        { img: 'https://i.pinimg.com/564x/47/5c/32/475c32fb4d438cdab2dfe01975320363.jpg' },
        { img: 'https://i.pinimg.com/236x/61/29/58/612958f0a7c90ea7642e0cee5064a14a.jpg' },
        { img: 'https://i.pinimg.com/564x/b2/e1/a9/b2e1a96121d617b6e12fe21e779594b4.jpg' },
        { img: 'https://i.pinimg.com/564x/01/33/2d/01332d49c42df49cde186f8a602053b1.jpg' },
        { img: 'https://i.pinimg.com/564x/ef/21/ca/ef21cafcece5966c96e56ae1df856c5b.jpg' },
        { img: 'https://i.pinimg.com/564x/82/1c/ab/821cabfe0660072fa0c378c1ed78a9b4.jpg' },
        { img: 'https://i.pinimg.com/564x/37/08/02/37080265d180367f022559bb41ccd7bc.jpg' },
        { img: 'https://i.pinimg.com/564x/b7/cb/81/b7cb81431848a619680a789f5a03a89c.jpg' },
        { img: 'https://i.pinimg.com/564x/c9/fd/01/c9fd01c751bfd54fa146f8740c9071ca.jpg' },
        { img: 'https://i.pinimg.com/564x/bf/90/d1/bf90d1d2446eab5d8a8a8ec7056270c4.jpg' },
        { img: 'https://i.pinimg.com/564x/2a/97/65/2a9765f1326f4ec9a216fea4ed27f9ae.jpg' },
        { img: 'https://i.pinimg.com/564x/4a/6b/0c/4a6b0c24428a6f9a47fcae777d15e52b.jpg' },
        { img: 'https://i.pinimg.com/564x/47/5c/32/475c32fb4d438cdab2dfe01975320363.jpg' },
        { img: 'https://i.pinimg.com/236x/61/29/58/612958f0a7c90ea7642e0cee5064a14a.jpg' },
        { img: 'https://i.pinimg.com/564x/b2/e1/a9/b2e1a96121d617b6e12fe21e779594b4.jpg' },
        { img: 'https://i.pinimg.com/564x/01/33/2d/01332d49c42df49cde186f8a602053b1.jpg' },
        { img: 'https://i.pinimg.com/564x/ef/21/ca/ef21cafcece5966c96e56ae1df856c5b.jpg' },
        { img: 'https://i.pinimg.com/564x/82/1c/ab/821cabfe0660072fa0c378c1ed78a9b4.jpg' },
    ]
    
    
    let yo = '';
    marqueeImages.forEach(item => {
        yo += `<img class='rounded-full h-full w-full object-cover' src="${item.img}" alt="">`
    })
    document.querySelector('#marque').innerHTML = `<div class="marquee-content rounded-full  ">${yo}</div>`;
    
}

marque()


// Page 3 Animation
function page3Animation() {
    var rightElems = document.querySelectorAll(".right-elem")
    rightElems.forEach(function (item) {
        item.addEventListener("mouseenter", function () {


            gsap.to(item.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        item.addEventListener("mouseleave", function () {
            gsap.to(item.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        item.addEventListener("mousemove", function (dets) {

            gsap.to(item.childNodes[3], {
                x: dets.x - item.getBoundingClientRect().x - 90,
                y: dets.y - item.getBoundingClientRect().y - 215
            })
        })
    })
}

page3Animation()

function page4Animation() {
   let tl =  gsap.timeline()

   tl.to('#page4 .letsExplore .h1-1',{
    x:1000,
    opacity:0,
    scrollTrigger: {
        trigger: "#page4 .letsExplore .h1-1",
        scroller: "#main",
        start: "top 27%",
        end: "top 0",
        scrub: 3,
        // markers:true
    }
   },"same")
   tl.to('#page4 .letsExplore .h1-2',{
    x:-1000,
    opacity:0,
    scrollTrigger: {
        trigger: "#page4 .letsExplore .h1-2",
        scroller: "#main",
        start: "top 27%",
        end: "top 0",
        scrub: 3,
        // markers:true
    }
   },"same")
   tl.to('#page4 .letsExplore .h1-3',{
    scale:0,
    opacity:-1,
    scrollTrigger: {
        trigger: "#page4 .letsExplore .h1-3",
        scroller: "#main",
        start: "top 27%",
        end: "top 0",
        scrub: 3,
        // markers:true
    }
   },"same")
   tl.to('#page4 video',{
    width:'80vw',
    scrollTrigger: {
        trigger: "#page4 ",
        scroller: "#main",
        start: "top 97%",
        end: "top 0",
        scrub: 3,
    }
   },"same")
    
}
page4Animation()