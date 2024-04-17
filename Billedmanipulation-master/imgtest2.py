from PIL import Image
from numpy import asarray
from matplotlib import pyplot
from matplotlib import image
# load the image
image = Image.open('mps.jpg')
# convert image to numpy array
data = asarray(image)
print(type(data))
# summarize shape
print(data.shape)

# create Pillow image
image2 = Image.fromarray(data)
pyplot.imshow(image2)
pyplot.show()