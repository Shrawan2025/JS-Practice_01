let rect = document.querySelector("#center")

rect.addEventListener("mousemove", function(details) {
    let rectLocation = rect.getBoundingClientRect()
    let insiderect = details.clientX - rectLocation.left;
    
    if(insiderect < rectLocation.width/2){
        let redColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`
        })
    }else{
        let blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`
        })
    }
})

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: '#212121'
    })
})