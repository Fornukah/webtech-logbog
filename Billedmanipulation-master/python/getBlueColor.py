from picamera.array import PiRGBArray
from picamera import PiCamera
from time import sleep
from matplotlib import image
from matplotlib import pyplot
import numpy as np


with PiCamera() as camera:
	camera.resolution = (2592,1952)
	rawCapture = PiRGBArray(camera)
	# giver kameraet tid til at indstille sig
	sleep(0.1)
	camera.capture(rawCapture, format='rgb') # bemærk at vi gemmer som blå, grøn, rød
	image = rawCapture.array

img = np.array(image)	
# blue color, set red=0 and green=0
img[:,:,1]  = 0
img[:,:,0]  = 0
pyplot.imshow(img)
pyplot.show()
