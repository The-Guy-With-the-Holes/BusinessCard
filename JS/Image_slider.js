let slide_Array = { 
    
    images:[
        {src:'Christmas2022.jpg', caption:'🎄Christmas 2022🎄'},
        { caption:'Enjoying some park play time'},
        { caption:'We love our Sebastian'},
        { caption:'Dads got you on his shoulders'},
        { caption:'Our time is limited and that\'s what makes it special '},
        { caption:'Sometimes i help with the shopping'},
        { caption:'I ride fast wheels'},
        { caption:'We love the water'},
        { caption:'*really, love the water..'},
        { caption:'And of course we love eachother'},
        //11
        { caption:'Dressing up'},
        { caption:'We laugh with our family'},
        { caption:'Spend time playing our games'},
        { caption:'And spend even more time playing with water'},
        { caption:'We love learning together'},
        { caption:'Exploring new enviroments'},
        { caption:'Wearing SillyHats'},
        { caption:'Getting our hands dirty'},
        { caption:'Playing in the sand'},
        { caption:'Swimming with Mum and Aunty Emma'},
        //21
        { caption:'Having good food'},
        { caption:'Double fisting drinks'},
        { caption:'Bananas & Biscuits! Yum!'},
        { caption:'So much to see!'},
        { caption:'Bubbles!'},
        { caption:'It\'s been a good one, see you next Year! ♥'},
       
    ],

    imgSrc:'../../Cards/Christmas2022/photo',
    slide_Index:1, 
    TotalIndexMoves:0,
    expandViewkeycount:0,
    lastKey:'none',
    useExpandKey:false,

};
// 

for (let i = 0; i < slide_Array.images.length; i++){
    let Caption = slide_Array.images[i].caption;
    let imgSrc=slide_Array.images[i].src??(slide_Array.imgSrc+(i+1)+".jpg"); 
    if(i+1==slide_Array.images.length){imgSrc="Christmas2022/photoE.jpg";}
    
    let image_blocks = createElement('div',{className:"image_blocks fadeAnimation"})
    let image_node = createElement('img',{src:imgSrc})
    let numText = createElement('div',{innerText:(i+1)+"/"+slide_Array.images.length,className:"numbertext"});
    let captionText = createElement('div',{ className:'captiontext'})
    let dot = createElement('button',{ className:"slider_dots",value:i+1}); 
    let p = createElement('p',{innerText:Caption});

    captionText.append(p);
    image_blocks.append(numText,image_node,captionText);
    document.querySelector('.prev').before(image_blocks);    
    document.getElementById("slider_dot_div").append(dot);
}



//let slider_switch = document.getElementById("fullscreen_slider_switch");
//let promptFullscreen = function(x){x==true?slider_switch.className="promptSlider":slider_switch.style.display="none";}
let fullscreen = document.getElementById('slide_main').className.includes('fullScreen')?true:false;

let PrevNext = document.querySelector('.prev')||document.querySelector('.next');

function promptSliderInteraction(action){
    if(slide_Array.useExpandKey==false){ return; }
    switch (action) {
        case 'PrevNext': animatePrevNext();  break;  
        case 'Fullscreen':  break;
        
        default:
             animatePrevNext();
            break;
    }
}

showSlides(slide_Array.slide_Index);


function plus_Slides(n){ 
    slide_Array.TotalIndexMoves++;
    showSlides(slide_Array.slide_Index=parseInt(slide_Array.slide_Index)+parseInt(n)); 
    setSliderBackgroundRotation(((365/slide_Array.images.length)*slide_Array.slide_Index).toFixed(1));
}

function showSlides(n){
    console.log("Showing Slide "+slide_Array.slide_Index);
   
    let i;
    let slides = document.getElementsByClassName("image_blocks");
    let slider_Dots = document.getElementsByClassName('slider_dots');
  
 if(n==0||n==slide_Array.images.length||slide_Array.TotalIndexMoves<3){
    if(fullscreen!=true&&slide_Array.TotalIndexMoves<3){
       // promptFullscreen(true);
    }
    if(n==0&&fullscreen!=true){promptSliderInteraction('all');}
}

 //makes sure slides in range
    if(n > slides.length){slide_Array.slide_Index=1;}
    if(n < 1){slide_Array.slide_Index=slides.length;}
    // prompt full screen slide three

    

    //hides slides
    for(i=0;i<slides.length;i++){slides[i].style.display="none";}
        //Removes active class 
    for(i=0; i<slider_Dots.length; i++){slider_Dots[i].className=slider_Dots[i].className.replace("active","");}

        // Sets active
    slides[slide_Array.slide_Index-1].style.display='block';
    slider_Dots[slide_Array.slide_Index-1].className="slider_dots active";   
}

let setSliderBackgroundRotation = function(deg){
    console.warn(deg);
    return document.querySelector('.Standard_slider').style.background="linear-gradient("+deg+"deg, #000,#000,#000,#faf )";
}


document.body.addEventListener('click', function (e) {
    const classN = e.target.className;
    let ID = e.target.id; 
    let ParentClass = e.target.parentNode.className;
    console.log(e.target+"was cicked"+" id:"+ID+" Class:"+classN+" parent(id):"+ParentClass);

    if(classN.includes("prev")||classN.includes('next')||classN.includes("slider_dots")){
        slide_Array.lastKey='plus';
        // handles dots
        if(classN.includes("slider_dots")){let val = e.target.value;return showSlides(slide_Array.slide_Index=val);}
        // < >
        classN=="prev"?plus_Slides(-1):plus_Slides(1);
        return;
    }
    

    if(ID=="fullscreen_slider_switch"||ParentClass.includes('image_blocks')){
      
        slide_Array.expandViewkeycount++;
        if(fullscreen == true){ 
           
            document.getElementById("slider_dot_div").style.display="block";
            document.getElementById('slide_main').className="Standard_slider"; 
           // ID.src="EI.png"; 
           //promptFullscreen(true);
            document.body.scrollTop=80;
        }
        else if(fullscreen==false){ 
         
           // ID.src="X.png"; 
            let ClearIcon = setTimeout(() => {
                //promptFullscreen(false);
            },2500 );
            document.getElementById("slider_dot_div").style.display="none";
            document.getElementById('slide_main').className="fullScreen_slider"; 
            ScrollHome(); ClearIcon;
        }
        slide_Array.lastKey='change';
        fullscreen = !fullscreen;
    }
})
