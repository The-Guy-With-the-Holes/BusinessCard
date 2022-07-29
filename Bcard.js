

function shiftery() {
let palletes =[ 
   
    "linear-gradient( 40deg, #ddaadd, #11ffad)",
    "linear-gradient( 240deg, #11aa55, #29ace0)",
    "linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)",
    "radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)",
    "repeating-conic-gradient(red 10%, yellow 20%) ",
    "linear-gradient(to bottom, #6666ff 0%, #3333ff 90%, transparent 100%) ",
    "linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96) ",
    "radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)",
    "repeating-conic-gradient(red 10%, yellow 20%)",                                                      
    "repeating-radial-gradient( #0bd3d3, #f890e7, #ffffff, #d0d0d0, #000000)"
]
document.documentElement.style.setProperty('--Shiftery-Background', palletes[SC.Loop]);
console.log(' Shiftery changing backgrounds to #:'+SC.Loop);
SC.Loop++;                                   
if (SC.Loop > 9) return SC.Loop=0;
}