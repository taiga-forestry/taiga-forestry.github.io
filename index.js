let lastScrollY = window.scrollY;
let navScrollable = false;

window.onscroll = (event) => {
    toggleNavBar();
    showContent();
    blurHome();
}

window.onload = (event) => {
    if (window.scrollY >= window.innerHeight) {
        let offset = Math.min(((window.scrollY / window.innerHeight) * 500), 2000);
        startTransitions(offset);
    }
    else {
        startTransitions(500);
    }

    // window.scrollTo(0, 0);
}

const startTransitions = (offset) => {
    document.getElementById("nav-bar").classList.add("nav-hidden");
    setTimeout(addHello, offset);
    setTimeout(addName, 1250 + offset);
    setTimeout(addPortfolio, 2500 + offset);
    setTimeout(addNavBar, 3000 + offset)
    setTimeout(addContact, 3250 + offset);
    setTimeout(() => navScrollable = true, 3000 + offset);
}

const addHello = () => {
    document.getElementById("hello").innerHTML = "Hello, ";
    document.getElementById("hello").classList.add("fade")
}

const addName = () => {
    document.getElementById("my-name").innerHTML = "I'm Tiger.";
    document.getElementById("my-name").classList.add("fade")
}

const addPortfolio = () => {
    document.getElementById("my-portfolio").innerHTML = "Welcome to my portfolio.";
    document.getElementById("my-portfolio").classList.add("fade")
}

const addNavBar = () => {
    document.getElementById("nav-bar").classList.remove("nav-hidden");
    document.getElementById("nav-bar").classList.add("fade");
}

const addContact = () => {
    document.getElementById("contact-icons").innerHTML = `
        <a href="https://www.instagram.com/taiga.forestry/" class="contact-icon">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto: tiger_ji@brown.com" class="contact-icon">
            <i class="fa-regular fa-envelope"></i>
        </a>
        <a href="https://github.com/taiga-forestry" class="contact-icon">
            <i class="fa-brands fa-github"></i> 
        </a>
        <a href="https://www.linkedin.com/in/tiger-ji/" class="contact-icon">
            <i class="fa-brands fa-linkedin-in"></i>
        </a> `
    document.getElementById("contact-icons").classList.add("fade");
}

const toggleNavBar = () => {
    if (navScrollable) {
        if (window.scrollY > 25 && lastScrollY < window.scrollY) {
            document.getElementById("nav-bar").classList.add("nav-hidden");
        } 
        else {
            document.getElementById("nav-bar").classList.remove("nav-hidden");
        }

        lastScrollY = window.scrollY;
    }
}

const showContent = () => {
    let allContent = document.querySelectorAll(".content-section");

    for (var i = 0; i < allContent.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = allContent[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            allContent[i].classList.add("reveal");
        } 
    }
}

const blurHome = () => {
    let distanceScrolled = $(this).scrollTop();
    let blurFactor = 60 * window.innerHeight / distanceScrolled;
    $("#home").css("-webkit-filter", "blur("+distanceScrolled/blurFactor+"px)");
}

const showExperienceDescription = (organization) => {
    if (organization == "iCode") {
        document.getElementById("experience-description").innerHTML = "icode";
    }
    else if (organization == "EnLiving Design") {
        document.getElementById("experience-description").innerHTML = "enliving design";
    }
    else {
        document.getElementById("experience-description").innerHTML = "google cssi";
    }

    console.log(organization);
}