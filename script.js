/* This file is used to add interactivity onto your website */

// Light mode and dark mode accesibility 
const lightBtn = document.getElementById('lightBtn');
const faIcons = document.querySelectorAll(".fa-solid");

const body = document.querySelector("body");
const lightBtnScope = document.getElementById('lightBtn');
const resumeBtn = document.getElementById("resumeBtn")

const navIcon = document.querySelectorAll(".navIcon");



const lightAndDarkFeature = () => {
    const faLight = document.getElementById("faLight")
   

    
    if (lightBtnScope.textContent === "Light Mode" ){
     body.style.backgroundColor = "white";
     lightBtnScope.textContent = "Dark Mode";

        // style each icon in class fa-solid
     faIcons.forEach((icon) => {
        icon.style.color = "black";
       
     });

     //keeps the nav icon the same color 
     navIcon.forEach((icon) => {
        icon.style.color = "white";

     }
     )

     faLight.style.color = "#577ab2";
     resumeBtn.style.color = "black";
     resumeBtn.style.border = "2px solid black";

  

     console.log("User click light Mode")
    } else {
        body.style.backgroundColor = "black";
        lightBtnScope.textContent = "Light Mode";
        console.log("User click Dark Mode");
        // style each icon in class fa-solid
        faIcons.forEach((icon) => {
            icon.style.color = "white";
         });

         resumeBtn.style.color = "white";
         resumeBtn.style.border = "2px solid white";
      

       

    }
}

lightBtn.addEventListener('click', lightAndDarkFeature);


// name typewriter 


const typeWriter = (elem, text) => {
    const speed = 200;
    let i = 0;
    
    const addLetter = () => {
      if (i < text.length) {
        elem.innerHTML += text.charAt(i);
        i++;
        setTimeout(addLetter, speed);
        
        } 
        else if (i === text.length) {
            setTimeout(() => {
                elem.innerHTML = "";
                i = 0;
                typeWriter(elem, text);
            }, 2000);

      } else {
        i = 0;
        elem.innerHTML = "";

        setTimeout(() => {
          typeWriter(elem, text);
        }, speed);
      }
    }
    
    addLetter();
    
  }
  
  const introName = "Hello, I'm OJ";
  const main = document.getElementById("mainName");
  
  typeWriter(main, introName);
  


