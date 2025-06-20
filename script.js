const sideBtns = document.querySelectorAll("nav span,tech span,nav svg,tech svg")
const firstSvg = document.querySelector("nav span")
console.log(firstSvg.getAttribute("value"))
sideBtns.forEach((sideBtn)=>{sideBtn.addEventListener("click",()=>{window.location.href=`${sideBtn.getAttribute("value")}.html`})})