

html_file = "template.html"
css_file = "style.css"
output_image = "output.png"

# Import the HTML class
from html2image import HTML

#create an html object

html = HTML(file=html_file, stylesheets=[css_file])

# Write the HTML object to a PNG image
html.write_png(output_image)
