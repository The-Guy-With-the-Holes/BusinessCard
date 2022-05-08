from PIL import Image
  
#open image in png format
Images = ['Certified Ethical Hacker',
    'Intro','Threats & Attack-Vectors', 'Concepts, Types & Phases',
    'FootPrinting & Recon', 'Scanning-Networks & Enumerations',
    'System Hacking', 'Malware, Trojans, Worms','Network Sniffing',
    'Social Engineering', 'Denial of Service', 'Session Hijacking',
    'WebServer Hacking']

oldImgLocation = "C:/N/Old\\"
newImgLocation = "C:/N/New\\"
ImgIN = ".png"
ImgOUT = ".jpg"
spac = ''
x=0
for x in range(len(Images)):
    print(Images[(x)])
    print(':: > Converting Image :')
    nameIN=spac.join(oldImgLocation+Images[(x)]+ImgIN)
    nameOUT=spac.join(newImgLocation+Images[(x)]+ImgOUT)
    print(nameIN)
    img_png = Image.open(nameIN)
#The image object is used to save the image in ImgOUT  format
    img_png.save(nameOUT)
    x+=1