document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  document.getElementById("contactMe").addEventListener("click", function () {
    var mailto = "sauerfabian.safa@gmail.com";
    var subject = "Contact via Portfolio-Website";
    var mailtoLink =
      "mailto:" + mailto + "?subject=" + encodeURIComponent(subject);
    window.location.href = mailtoLink;
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => observer.observe(element));
});
