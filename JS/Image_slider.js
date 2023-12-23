let slide_Array = { 

    // images:[
    //     // {src:'new_capture.jpg', caption:'🎄Christmas 2022🎄'},
    //     { caption:'Enjoying some park play time'},
    //     { caption:'We love our Sebastian'},
     
    // ],

    imgSrc:'../../../test/captures/',
    img0:'new_capture.jpg',
    
    slide_Index:0, 
    TotalIndexMoves:0,
    expandViewkeycount:0,
    lastKey:'none',
    useExpandKey:false,

    settings:{
        Slider_dots:[true,"#slider_dot_div"],
        Captions:[true,".captiontext"],
        Img_count:[true,".numbertext"],
    }

};


function toggle_slider_settings(s) {
    setting_name=s.id;
    setting=slide_Array.settings[setting_name];
    setting[0]=!setting[0];

    // Get all settings
    change_group=document.querySelectorAll(setting[1])

    if (setting[0]==true){
        s.innerText=`${setting_name}:ON`;
        group_set="block";
    }
    else {
        s.innerText=`${setting_name}:OFF`;
        group_set="none";
    }
    // Show / Display the setting
    for (let i = 0; i<change_group.length; i++){change_group[i].style.display=group_set;}
} 


function build_slider(islider) {
slide_Array.images=islider
    for (let i = 0; i < slide_Array.images.length; i++){
        let Caption = slide_Array.images[i].caption??"ramp";
        let imgSrc=slide_Array.images[i].src??(slide_Array.imgSrc+"capture_"+i+".jpg"); 
        // set img1 as img0 
        if(i==0){imgSrc=slide_Array.imgSrc+slide_Array.img0;}
        
        let image_blocks = createElement('div',{className:"image_blocks fadeAnimation"})
        let image_node = createElement('img',{src:imgSrc})
        let numText = createElement('div',{innerText:(i+1)+"/"+slide_Array.images.length,className:"numbertext"});
        let captionText = createElement('div',{ className:'captiontext'})
        let dot = createElement('button',{ className:"slider_dots",value:i}); 
        let p = createElement('p',{innerText:Caption});

        captionText.append(p);
        image_blocks.append(numText,image_node,captionText);
        document.querySelector('.prev').before(image_blocks);    
        document.getElementById("slider_dot_div").append(dot);
    }
  showSlides(1);
}


//let slider_switch = document.getElementById("fullscreen_slider_switch");
//let promptFullscreen = function(x){x==true?slider_switch.className="promptSlider":slider_switch.style.display="none";}

let fullscreen = document.getElementById('slide_main').className.includes('fullScreen')?true:false;

let PrevNext = document.querySelector('.prev')||document.querySelector('.next');

function promptSliderInteraction(action){
    if(slide_Array.useExpandKey==false){ return; }
    switch (action) {
        case 'Fullscreen':  break;
        //case 'PrevNext': animatePrevNext();  break;  
        
        default:
             animatePrevNext();
        break;
    }
}


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
    if(n > slides.length-1){slide_Array.slide_Index=0 ;}
    if(n < 0){slide_Array.slide_Index=slides.length-1;}
    
    //hide all slides
    for(i=0;i<slides.length;i++){slides[i].style.display="none";}
    //Removes all active class 
    for(i=0; i<slider_Dots.length; i++){slider_Dots[i].className=slider_Dots[i].className.replace("active","");}

    // Display Slide && Set active class
    slides[slide_Array.slide_Index].style.display='block';
    slider_Dots[slide_Array.slide_Index].className="slider_dots active";   
}

let setSliderBackgroundRotation = function(deg){
    console.warn(deg);
    return document.querySelector('.Standard_slider').style.background="linear-gradient("+deg+"deg, #000,#000,#000,lightcoral )";
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
           
            document.querySelector("h1").style.display="block";
            document.getElementById('slide_main').className="Standard_slider"; 
           // ID.src="EI.png"; 
           //promptFullscreen(true);
         
           // document.body.scrollTop=80;
        }
        else if(fullscreen==false){ 
         
           // ID.src="X.png"; 
            let ClearIcon = setTimeout(() => {
                //promptFullscreen(false);
            },2500 );
            document.querySelector("h1").style.display="none";

            // document.getElementById("slider_dot_div").style.display="none";
            document.getElementById('slide_main').className="fullScreen_slider"; 
         //   ScrollHome(); ClearIcon;
        }
        slide_Array.lastKey='change';
        fullscreen = !fullscreen;
    }
})
