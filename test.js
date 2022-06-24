let lastScrollY = window.scrollY;
let navScrollable = false;
let lastSelected = "cssi";

window.onscroll = (event) => {
    toggleNavBar();
    showContent();
    blurHome();
}

window.onload = (event) => {
    loadPage();
    showExperienceDescription();
}

const loadPage = () => {
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
    document.getElementById("welcome").innerHTML = "Welcome to my portfolio.";
    document.getElementById("welcome").classList.add("fade")
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
        </a>`
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
    let distanceFromTop = $(this).scrollTop();
    let blurFactor = 60 * window.innerHeight / distanceFromTop;
    
    if (distanceFromTop < window.innerHeight) {
        $("#home-page").css("-webkit-filter", "blur("+distanceFromTop/blurFactor+"px)");
    }
}

const showExperienceDescription = (organization) => {
    document.getElementById(lastSelected).classList.remove("ol-selected");
    document.getElementById("experience-description").classList.add("fade")
    document.getElementById("experience-description").innerHTML = "";

    if (organization == "iCode") {
        lastSelected = "icode";
        document.getElementById("icode").classList.add("ol-selected");
        document.getElementById("experience-description").innerHTML = `
        <div>
            <h6>
                Instructor @ iCode
            </h6>
            <p> August 2020 — July 2021 </p>
            <ul>
                <li> Planned and held open house demos for 100+ prospective students and families over the year </li>
                <li> Taught weekly classes for various age ranges about concepts such as coding fundamentals in Scratch and basic web development in HTML </li>
                <li> Led camps for 40+ hours/week on programming drones in Python, developing games with Construct 3, and using Raspberry Pi and circuits </li>
            </ul>
        </div>`;
    }
    else if (organization == "EnLiving Design") {
        lastSelected = "enliving";
        document.getElementById("enliving").classList.add("ol-selected");
        document.getElementById("experience-description").innerHTML = `
        <div>
            <h6>
                Research Assistant @ EnLiving Design
            </h6>
            <p> May 2020 — August 2020 </p>
            <ul>
                <li> Read 100+ pages of literature about the utility of depth cameras in helping occupational therapists more accurately assess clinical sitting body balance </li>
                <li> Coded a program in C# to track joint movement patterns using the Intel RealSense skeleton tracking SDK to update the previous code written for the discontinued Microsoft Kinect line </li>
            </ul>
        </div>`;
    }
    else {
        lastSelected = "cssi";
        document.getElementById("cssi").classList.add("ol-selected");
        document.getElementById("experience-description").innerHTML = `
        <div>
            <h6>
                CS Summer Institute @ Google
            </h6>
            <p> July 2021 — August 2021 </p>
            <ul>
                <li> Completed a project-based curriculum for HTML, CSS, JS, and Firebase led by Google developers </li>
                <li> Configured 10+ projects to practice object-oriented programming, effective UI/UX, authorization and authentication, and Git </li>
                <li> Developed a personalized “university student page” app, presented to Google engineers and community leaders (see <a href="#cssi-description"> Featured Projects! </a>) </li>
            </ul>
        </div>`;
    }

    console.log(organization);
}