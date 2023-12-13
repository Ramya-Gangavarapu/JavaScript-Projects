let puppyImage = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeButton = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIcon.style.color = "#0967d2";
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButton.style.color = "#9aa5b1";
        likeIcon.style.color = "#cbd2d9";
        isImageLiked = false;
        likeButton.style.backgroundColor = "#9aa5b1";
    }
}