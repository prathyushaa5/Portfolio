

    var tablinks=document.getElementsByClassName("title-tab")
    var tabcontents=document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    function show1(sec){
        let targetElement=document.getElementById(sec);
        if(targetElement){
         targetElement.scrollIntoView({behavior:'smooth'});
        }
     }

     document.getElementById('contactForm').addEventListener('submit', function(event) {
        alert('Your message has been sent!');
    });
    




