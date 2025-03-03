#!/bin/bash

# Create an array of image URLs
declare -a images=(
  "https://source.unsplash.com/random/1920x1080/?interior,painting" # binnenschilderwerk.jpg
  "https://source.unsplash.com/random/1920x1080/?exterior,painting" # buitenschilderwerk.jpg
  "https://source.unsplash.com/random/1920x1080/?wallpaper,installation" # behangwerk.jpg
)

# Download each image
wget -O binnenschilderwerk.jpg "${images[0]}"
wget -O buitenschilderwerk.jpg "${images[1]}"
wget -O behangwerk.jpg "${images[2]}"

echo "Service images downloaded successfully!"