import shutil
import glob
import os, sys
from PIL import Image


files = [f for f in glob.glob( "./pics/**/**", recursive=True)]


for file in files:
  # os.rename(file, file.replace("jpeg", "jpg").replace("JPG", "jpg"))
  filename = file.replace("./pics/", "")
  try:
    im = Image.open(file)
    im.thumbnail((125,125100))
    im.save("./thumbnail/" + filename)
  except IOError:
    print("error")
