# PowerShell script to download project images

# Create the directory if it doesn't exist
$imagesDir = $PSScriptRoot

# Define image URLs (using Unsplash for placeholder professional painting project images)
$imageUrls = @(
    "https://source.unsplash.com/random/800x600/?house,painting,exterior" # project1.jpg
    "https://source.unsplash.com/random/800x600/?apartment,interior,painting" # project2.jpg
    "https://source.unsplash.com/random/800x600/?villa,renovation,painting" # project3.jpg
    "https://source.unsplash.com/random/800x600/?wallpaper,interior,design" # project4.jpg
    "https://source.unsplash.com/random/800x600/?office,painting,interior" # project5.jpg
    "https://source.unsplash.com/random/800x600/?historical,building,restoration" # project6.jpg
)

# Define file names
$fileNames = @(
    "project1.jpg"
    "project2.jpg"
    "project3.jpg"
    "project4.jpg"
    "project5.jpg"
    "project6.jpg"
)

# Download each image
for ($i = 0; $i -lt $imageUrls.Count; $i++) {
    $url = $imageUrls[$i]
    $fileName = $fileNames[$i]
    $outputPath = Join-Path -Path $imagesDir -ChildPath $fileName
    
    Write-Host "Downloading $fileName from $url"
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Downloaded $fileName successfully" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $fileName: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Project images download completed!" -ForegroundColor Cyan