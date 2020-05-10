
var images = document.getElementById("myDiv").getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].onmouseover = function ()
  {
    this.style.cursor = 'hand';
    this.style.borderColor = 'green';
  }


  
  /* images[i].onmouseover = function ()
  {
    this.style.cursor = 'hand';
    this.style.borderColor = 'red';
  }*/
  
  images[i].onmouseout = function ()
  {
    this.style.cursor = 'pointer';
    this.style.borderColor = 'grey';
    } 
}
  
function  changeImage(event)
 {
   event = event || window.event // for compatability in all browers

   var targetElememt = event.target || event.srcElement;
   if(targetElememt.tagName == "IMG")
   document.getElementById("mainImage").src = targetElememt.getAttribute("src");
  

  
}