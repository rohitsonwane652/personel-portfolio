const showMore = ()=>{
    console.log("button clicked");
    document.getElementById("project-3").style.display = "flex";
    document.getElementById("show-less-btn").style.display = "block";
    document.getElementById("show-more-btn").style.display = "none";
}

const showLess = ()=>{
    document.getElementById("project-3").style.display = "none";
    document.getElementById("show-more-btn").style.display = "block";
    document.getElementById("show-less-btn").style.display = "none";
}