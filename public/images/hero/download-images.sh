#!/bin/bash

# Create an array of image URLs
declare -a images=(
  "https://source.unsplash.com/random/1920x1080/?painting,house" # home-hero.jpg
  "https://source.unsplash.com/random/1920x1080/?portfolio,painting" # portfolio-hero.jpg
  "https://source.unsplash.com/random/1920x1080/?contact,office" # contact-hero.jpg
  "https://source.unsplash.com/random/1920x1080/?privacy,document" # privacy-hero.jpg
)

# Download each image
wget -O home-hero.jpg "${images[0]}"
wget -O portfolio-hero.jpg "${images[1]}"
wget -O contact-hero.jpg "${images[2]}"
wget -O privacy-hero.jpg "${images[3]}"

echo "Images downloaded successfully!"