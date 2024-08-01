let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";

        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)


// circle skill
const circles = document.querySelectorAll(`.circle`);
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;



    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
    
});

//mixitup portfolio section
var mixer = mixitup('.portfolio-gallery');




// active menu
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){ 
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


// sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () { 
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () => { 
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}
menuIcon.onscroll = () => { 
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}
// parallax
const observer = new IntersectionObserver((entries) =>{ 
    entries.forEach(entry=> {
    if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
    } else {
        entry.target.classList.remove("show-items");
    }
});
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

// email section

function sendMail() { 
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_vmfrhep", "template_s2hf0op", params).then(function (res) { 
        alert("Success!" + res.status);
    })    
    document.getElementById("myForm").reset();
}

//toggle button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggleButtonP").addEventListener("click", function () {
        let hiddenText = document.getElementById("hiddenText");
        let toggleButton = document.getElementById("toggleButtonP");

        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
            toggleButton.textContent = "მაჩვენე ნაკლები";
        } else {
            hiddenText.style.display = "none";
            toggleButton.textContent = "მაჩვენე მეტი";
        }
    });

})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggleButton").addEventListener("click", function () {
        let hiddenText1 = document.getElementById("hiddenText1");
        let toggleButton = document.getElementById("toggleButton");

        if (hiddenText1.style.display === "none") {
            hiddenText1.style.display = "block";
            toggleButton.textContent = "მაჩვენე ნაკლები";
        } else {
            hiddenText1.style.display = "none";
            toggleButton.textContent = "მაჩვენე მეტი";
        }
    });

})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggleButton2").addEventListener("click", function () {
        let hiddenText2 = document.getElementById("hiddenText2");
        let toggleButton2 = document.getElementById("toggleButton2");

        if (hiddenText2.style.display === "none") {
            hiddenText2.style.display = "block";
            toggleButton2.textContent = "მაჩვენე ნაკლები";
        } else {
            hiddenText2.style.display = "none";
            toggleButton2.textContent = "მაჩვენე მეტი";
        }
    });

})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggleButton3").addEventListener("click", function () {
        let hiddenText3 = document.getElementById("hiddenText3");
        let toggleButton3 = document.getElementById("toggleButton3");

        if (hiddenText3.style.display === "none") {
            hiddenText3.style.display = "block";
            toggleButton3.textContent = "მაჩვენე ნაკლები";
        } else {
            hiddenText3.style.display = "none";
            toggleButton3.textContent = "მაჩვენე მეტი";
        }
    });

})






//bilingual function


document.getElementById("englishButton").addEventListener("click", function (){
    changeLanguage("en");
});

document.getElementById("georgianButton").addEventListener("click", function (){
    changeLanguage("ge");
});

function changeLanguage(language) { 
    var titleElement = document.querySelector('h2');
    var titleElement1 = document.querySelector('h3');
    var spanContainer = document.querySelector('.span-container'); // Assuming the span elements are within a container
    var navlistElement = document.querySelector('.navlist');
    var paragraphElement = document.querySelector('p');
    var buttonElement = document.querySelector('.selected-lang');
    var titleElement5 = document.querySelector('h5');

    if (language === 'en') {
        navlistElement.innerHTML = `
            <li><a href="#home" style="--i:1;">Home</a></li>
            <li><a href="#about" style="--i:2;">About</a></li>
            <li><a href="#Service" style="--i:3;">Service</a></li>
            <li><a href="#skills" style="--i:4;">Skills</a></li>
            <li><a href="#portfolio" style="--i:5;">Portfolio</a></li>
            <li><a href="#contact" style="--i:6;">Contact</a></li>
        `;
        titleElement.textContent = 'Hello';
        titleElement1.textContent = 'And I am';

        // Clear the current content of span container and append new spans
        spanContainer.innerHTML = '';
        var spanContentEn = [
            'Youtuber&nbsp;',
            'Web&nbsp;Designer',
            'Frontend&nbsp;Developer',
            'UX/UI&nbsp;Developer',
            'Graphic&nbsp;Designer'
        ];
        spanContentEn.forEach(content => {
            var span = document.createElement('span');
            span.className = 'word';
            span.innerHTML = content;
            spanContainer.appendChild(span);
        });

        paragraphElement.textContent = 'A little bit about myself. I am an IT Administrator with more than 8 years of experience';
        buttonElement.textContent = 'en';
        titleElement5.textContent = 'Email:';
    } else if (language === 'ge') {
        navlistElement.innerHTML = `
            <li><a href="#home" style="--i:1;">მთავარი</a></li>
            <li><a href="#about" style="--i:2;">ჩემს შესახებ</a></li>
            <li><a href="#Service" style="--i:3;">სერვისი</a></li>
            <li><a href="#skills" style="--i:4;">უნარები</a></li>
            <li><a href="#portfolio" style="--i:5;">ბლოგი</a></li>
            <li><a href="#contact" style="--i:6;">კონტაქტი</a></li>
        `;
        titleElement.textContent = 'გამარჯობა';
        titleElement1.textContent = 'და მე ვარ';

        // Clear the current content of span container and append new spans
        spanContainer.innerHTML = '';
        var spanContentGe = [
            'იუთუბერი&nbsp;',
            'ვებ&nbsp;დიზაინერი',
            'ფრონტენდ&nbsp;დეველოპერი',
            'UX/UI&nbsp;დეველოპერი',
            'გრაფიკ&nbsp;დიზაინერი'
        ];
        spanContentGe.forEach(content => {
            var span = document.createElement('span');
            span.className = 'word';
            span.innerHTML = content;
            spanContainer.appendChild(span);
        });

        paragraphElement.textContent = 'ცოტა რამ ჩემს შესახებ: მე გახლავართ ჯანო ღვინიანიძე, რომელსაც აქვს 8 წელზე მეტი გამოცდილება IT ადმინისტრირების სფეროში';
        buttonElement.textContent = 'ge';
        titleElement5.textContent = 'ელფოსტა:';
    }
}
