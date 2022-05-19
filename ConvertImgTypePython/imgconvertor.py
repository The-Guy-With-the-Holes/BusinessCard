from PIL import Image
  
#open image in png format
Locale = "C:/Users/JackC/BusinessCard/ConvertImgTypePython"
oldImgLocation = "Old/"
newImgLocation = "New/"
ImgIN = ".jpg"
ImgOUT = ".png"
spac = ''
#'ProfSeb''Rocksit',,'SebSwing',
Images=['SebPool','TScult','SebLongShirt','Walking']

x=0
for x in range(len(Images)):
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
    im.close()
    x+=1
print('::>> FUll Conversion complete, ran ',x,' Cycles <<::')