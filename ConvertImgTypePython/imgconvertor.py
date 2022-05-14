from PIL import Image
  
#open image in png format
Locale = "C:/Users/JackC/BusinessCard/ConvertImgTypePython"
oldImgLocation = "Old/"
newImgLocation = "New/"
ImgIN = ".png"
ImgOUT = ".jpg"
spac = ''

Images = ['Coding-Fundamentals-I','Coding-Fundamentals-II', 
'Intro-to-Interviewing', 'Array-Methods'];

x=0
for x in range(len(Images)):
    print(Images[(x)])
    print(':: > Converting Image :')
    nameIN=spac.join(oldImgLocation+Images[(x)]+ImgIN)
    nameOUT=spac.join(newImgLocation+Images[(x)]+ImgOUT)
    print(nameIN)
    im = Image.open(nameIN)
    if im.mode in ("RGBA", "P"): im = im.convert("RGB")
    #convert transparency
    Out_img= im
#The image object is used to save the image in ImgOUT  format
    Out_img.save(nameOUT)
    x+=1
print('::>> FUll Conversion complete, ran ',x,' Cycles <<::')