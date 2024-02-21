window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}



window.addEventListener("load", () =>{
    
    let video = document.getElementById("video");

    setTimeout(function(){
      video.play();
    }, 100);

    const loader = document.querySelector(".loader");

    setTimeout(function() {
          loader.classList.add("loader-hidden");
          
          video.style.opacity = 0;
          loader.addEventListener("transitioned", () =>{
          document.body.removeChild("loader");
      });

  
    }, 4800)
})



window.onscroll = function() {myFunction() 

function myFunction() {
  if (document.documentElement.scrollTop > 1550) {
    document.getElementById("prog-dev").style.width = "80%";
  }

  if (document.documentElement.scrollTop > 1700) {
    document.getElementById("prog-des").style.width = "90%";
  }
  const counts = document.querySelectorAll('.view-count');
  const speed = 2007;
  
  
  
  counts.forEach((counter) => {
    isCount = false;
    if(document.documentElement.scrollTop > 2550){
      function upDate(){
          const target = Number(counter.getAttribute('data-target'))
          const count = Number(counter.innerText)
          const inc = target / speed         
          if(count < target){
              counter.innerText = Math.floor(inc + count) 
              setTimeout(upDate, 15)
          }else{
              counter.innerText = target
          }
      }
      upDate()
    }
  })
}        
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}


// let nums = document.querySelectorAll(".count");
// let statsSection = document.querySelector(".progress-bar-content");
// let started = false;

// window.onscroll = function() {
//   if(window.scrollY >= statsSection.offsetTop){
//     if(!started){
//     nums.forEach((num) => startCount(num));
//   }
//   started = true;
//   }
// }

// function startCount(el){
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//       if(el.textContent == goal){
//         clearInterval(count)
//       }
//   }, 100)
// }

// startCount(nums[0]);