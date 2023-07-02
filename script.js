// function on click burger btn
document.querySelector("#btn-1").addEventListener("click", function () {
    let menu = document.querySelector("#menu");  
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else if(menu.style.display = "none"){
      menu.style.display = "flex";
    }
  });

  // function to changed class when clicked on li a 
  document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu");

    menu.addEventListener("click", function(event) {
      if (event.target.tagName === "A") {
        let allLinks = menu.querySelectorAll("a");
        for (let link of allLinks) {
          if (link === event.target) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      }
    });
    

  });

  //function on nav cliks
  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("all-work").addEventListener("click",function(){
        let other=document.querySelectorAll(".all")
            other.forEach((e)=>{
                e.style.display="block"
            })
    })
    document.getElementById("js-work").addEventListener("click",function(){
        let other=document.querySelectorAll(".non-js")
        let jswork=document.querySelectorAll(".js")
            other.forEach((e)=>{
                if(e.style.display="block"){
                    e.style.display="none"
                }
                
            })
            jswork.forEach((e)=>{
                if(e.style.display==="none"){
                    e.style.display="block"
                }
            })
    })
    document.getElementById("j-query").addEventListener("click",function(){
        let other=document.querySelectorAll(".non-jq")
        let jqwork=document.querySelectorAll(".jquery")
            other.forEach((e)=>{
                if(e.style.display="block"){
                    e.style.display="none"
                }
            })
            jqwork.forEach((e)=>{
                if(e.style.display==="none"){
                    e.style.display="block"
                }
            })
    })
    document.getElementById("s-n-b").addEventListener("click",function(){
        let other=document.querySelectorAll(".non-sass-b")
        let S_work=document.querySelectorAll(".sass-b")
            other.forEach((e)=>{
                if(e.style.display="block"){
                    e.style.display="none"
                }
            })
            S_work.forEach((e)=>{
                if(e.style.display==="none"){
                    e.style.display="block"
                }
            })
    })
  })

  // function for hide display
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-1").addEventListener("click", function() {
        let menu = document.getElementById("menu");
        
        // Attach a click event listener to each menu item
        let menuItems = menu.children;
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function() {
                menu.style.display = "none";
            });
        }
    });
});

  