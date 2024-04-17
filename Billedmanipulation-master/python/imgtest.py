from PIL import Image
from matplotlib import image
from matplotlib import pyplot
import numpy as np

image = Image.open('mps.jpg')

#data = np.array(image)
data = image.array
data = data[:,:,0]-data[:,:,2]

print(type(data))
print(data.shape)

img = Image.fromarray(data)

pyplot.imshow(img)
pyplot.show()