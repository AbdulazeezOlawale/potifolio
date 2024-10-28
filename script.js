const navItem = document.querySelectorAll(".nav-ul li");
const navLinks = document.querySelectorAll(".nav-ul li a");
const downloadResumeBtn = document.getElementById("download-resume");
const previewResumeBtn = document.getElementById("preview-resume");

navItem.forEach((item, index) => {
    const navBtn = item.querySelector("a");
    const navLink = navLinks[index];

    navBtn.addEventListener("click", () => {
        navLinks.forEach((item) => {
            item.classList.remove("active-nav");
        })

        navLink.classList.add("active-nav");
    })

})


downloadResumeBtn.addEventListener("click", () => {
    window.location.href = "./resume/Abdulazeez-resume.pdf";
});

previewResumeBtn.addEventListener("click", () => {
    window.open("./resume/Abdulazeez-resume.pdf", "_blank");
});