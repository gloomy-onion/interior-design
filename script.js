// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn-header")) {
//     let dropdowns = document.getElementsByClassName("dropdown-header");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };//

let myDropdown = document.querySelector('.dropdown-header');
let btn = document.querySelector('.dropbtn-header');
btn.addEventListener('click', function handleClick() {
  if (myDropdown.style.display === 'none') {
    myDropdown.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
});
