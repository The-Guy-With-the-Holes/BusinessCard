from PIL import Image
filename = r'Ico/GFicon.png'
img = Image.open(filename)
img.save('Ico/GFicon.ico')
print ('File Saved')