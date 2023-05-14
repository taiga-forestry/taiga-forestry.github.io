let lastScrollY = window.scrollY;
let navScrollable = false;
let navModalState = "closed";
let lastExperienceSelected = "#cssi";

window.onscroll = (event) => {
    toggleNavBar();
    showContent();
    blurHome();
}

window.onload = (event) => {
    loadPage();
    showExperienceDescription("Google CSSI");
}

// when TJ in navbar is clicked
const reloadPage = () => {
    scrollTo(0, 0); 
    location.reload();
}

const loadPage = () => {
    if (window.scrollY >= window.innerHeight) {
        let offset = Math.min(((window.scrollY / window.innerHeight) * 500), 2000);
        startTransitions(offset);
    }
    else {
        startTransitions(500);
    }

    window.scrollTo(0, 0);
}

const startTransitions = (offset) => {
    $("#nav-bar").addClass("hidden");
    setTimeout(addHello, offset);
    setTimeout(addName, 1250 + offset);
    setTimeout(addPortfolio, 2500 + offset);
    setTimeout(addNavBar, 3000 + offset)
    setTimeout(addContact, 3250 + offset);
    setTimeout(() => navScrollable = true, 3000 + offset);
}

const addHello = () => {
    $("#hello").html("Hello, ");
    $("#hello").addClass("fade");
}

const addName = () => {
    $("#my-name").html("I'm Tiger.");
    $("#my-name").addClass("fade");
}

const addPortfolio = () => {
    $("#welcome").html("Welcome to my portfolio.");
    $("#welcome").addClass("fade");
}

const addNavBar = () => {
    $("#nav-bar").removeClass("hidden");
    $("#nav-bar").addClass("fade");
}

const addContact = () => {
    $("#contact-icons").html(`
        <a href="https://www.instagram.com/taiga.forestry/" class="contact-icon" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto: tiger_ji@brown.com" class="contact-icon" target="_blank">
            <i class="fa-regular fa-envelope"></i>
        </a>
        <a href="https://github.com/taiga-forestry" class="contact-icon" target="_blank">
            <i class="fa-brands fa-github"></i> 
        </a>
        <a href="https://www.linkedin.com/in/tiger-ji/" class="contact-icon" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
        </a>`);
        $("#contact-icons").addClass("fade");
}

const toggleNavBar = () => {
    if (navScrollable) {
        if (window.scrollY > 25 && lastScrollY < window.scrollY) {
            $("#nav-bar").addClass("hidden");
        } 
        else {
            $("#nav-bar").removeClass("hidden");
        }

        lastScrollY = window.scrollY;
    }
}

const openNavModal = () => {
    navModalState = "open";
    blurNonModal();
}

const closeNavModal = () => {
    navModalState = "closed";
    unblurNonModal();
}

const blurNonModal = () => {
    $("#nav-modal").addClass("reveal");
    $("#home-page").css("-webkit-filter", "blur(10px)");
    $("#page-content").addClass("blur");
}

const unblurNonModal = () => {
    $("#nav-modal").removeClass("reveal");
    blurHome();
    $("#page-content").removeClass("blur");
}

window.matchMedia("(min-width: 768.5px)").addListener(() => {
    navModalState = "closed";
    unblurNonModal();
});

const showContent = () => {
    let allContent = document.querySelectorAll(".content-section");

    for (let i = 0; i < allContent.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = allContent[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            allContent[i].classList.add("reveal");
        } 
    }
}

const blurHome = () => {
    let distanceFromTop = $(this).scrollTop();
    let blurFactor = 60 * window.innerHeight / distanceFromTop;
    
    if (distanceFromTop < window.innerHeight && navModalState == "closed") {
        $("#home-page").css("-webkit-filter", "blur("+distanceFromTop/blurFactor+"px)");
    }
}

const showExperienceDescription = (organization) => {
    $(lastExperienceSelected).removeClass("experience-selected");
    $(lastExperienceSelected + "-description").removeClass("reveal");

    if (organization == "Google CSSI") {
        lastExperienceSelected = "#cssi";
    }
    else if (organization == "iCode") {
        lastExperienceSelected = "#icode";
    }
    else if (organization == "EnLiving Design") {
        lastExperienceSelected = "#enliving";
    }

    $(lastExperienceSelected).addClass("experience-selected");
    $(lastExperienceSelected + "-description").addClass("reveal");
}
