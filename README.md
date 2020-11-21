# Link to PDF

<p align=center>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width=250>
  <br>
  <br>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">
  <img src="https://img.shields.io/badge/LINK-PPF-brightgreen">
    <img src="https://img.shields.io/badge/png-pdf-red">
</p>

> 👩🏽‍💻 Turn any link to a pdf

## What is this ?

This is an elegant and simple api that recieves any link and uses puppeteer to screenshot that link into png format and then uses imagemagick to convert to pdf the reason for this is because sometime when converting html to pdf it does not come out the desired way

## How to use

### Prequisistes

1. Make sure to have imagemagick installed
<p align=center>
    <img src="https://i.imgur.com/tAFH4Hd.png" width=250>

</p>
If you do not have it installed run:

> sudo apt install imagemagick

2. Make sure you have nodejs installed

## Usage

📌 First clone the repo:

```
git clone https://github.com/micaelillos/LinkToPdf.git
```

📌 Change Directory

```
cd LinkToPdf
```

📌 Next install dependecies

```
npm install
```

📌 Run project

```
npm run start
```

📌 To convert link to pdf enter this in a browser

> http://localhost:4000/convert?link=[yourlink]

Example:

> http://localhost:4000/convert?link=https://google.com

## TODO

Add support for cropping & multiple pages

- **For help or questions** - _Get in touch_ - <a href="https://micaelil.com/contact"> Contact me </a>
