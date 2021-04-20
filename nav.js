const navBtn = document.getElementById("nav_toggle")
const links = document.getElementById("nav_links")

navBtn.addEventListener("click", ()=>{
  links.classList.toggle("show_links")
})

console.log("mae is lazy");
