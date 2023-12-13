let springBtn = document.getElementById("springBtn");
let summerBtn = document.getElementById("summerBtn");
let autumnBtn = document.getElementById("autumnBtn");
let winterBtn = document.getElementById("winterBtn");
let seasonSmallImage = document.getElementById("seasonSmallImage");
let seasonMediumImage = document.getElementById("seasonMediumImage");

springBtn.addEventListener("click", function() {
    seasonSmallImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    seasonMediumImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
});

summerBtn.addEventListener("click", function() {
    seasonSmallImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    seasonMediumImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
});

autumnBtn.addEventListener("click", function() {
    seasonSmallImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    seasonMediumImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
});

winterBtn.addEventListener("click", function() {
    seasonSmallImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    seasonMediumImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
});