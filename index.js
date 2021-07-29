
const typewriter = (param) => {
  let el = document.querySelector(param.el);
  let speed = param.speed;
  let string = param.string.split("");

  string.forEach((char, index) => {
      setTimeout(() => {
          el.textContent += char;
      }, speed * index);
  });
};

typewriter({
  el: "#typewriter",
  speed: 100,
  string: "  Aging is my life."
});








// const targetElement = document.getElementById("app");
//  for (let i = 0; i < targetElement.length; i++) {
//   const getElementDistance = targetElement[i].
//   getBoundingClientRect().top 
//   console.log(getElementDistance);
//  }




const targetElement = document.querySelectorAll
(".main__img--li");
document.addEventListener("scroll",function(){
  for(let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
});










(function(){
  var zoomArea = document.querySelector('.zoom-area');
  var zoomImage = zoomArea.querySelector('img');
  var size = 172;
  var scale = 300 / size;
  Array.prototype.forEach.call(document.querySelectorAll('.m-lens-container'), function(container){
    var lens = container.querySelector('.m-lens');
    var img = container.querySelector('img');
    container.addEventListener('mouseenter', function(){
      var image = container.querySelector('img');
      zoomArea.classList.add('active');
      zoomImage.setAttribute('src', image.src);
      zoomImage.style.width = (image.offsetWidth * scale) + 'px';
    });
    container.addEventListener('mouseleave', function(){
      zoomArea.classList.remove('active');
    });
    var xmax, ymax;
    img.addEventListener('load', function(){
       xmax = img.offsetWidth - size;
       ymax = img.offsetHeight - size;
    });
    container.addEventListener('mousemove', function(e){
      var rect = container.getBoundingClientRect();
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var positionX = rect.left + window.pageXOffset;
      var positionY = rect.top + window.pageYOffset;
      var offsetX = mouseX - positionX; 
      var offsetY = mouseY - positionY; 
      var left = offsetX - (size / 2);
      var top = offsetY - (size / 2);

      if(left > xmax){
        left = xmax;
      }
      if(top > ymax){
        top = ymax;
      }
      if(left < 0){
        left = 0;
      }
      if(top < 0){
        top = 0;
      }
      lens.style.top = top + 'px';
      lens.style.left = left + 'px';
      zoomImage.style.marginLeft = -(left * scale) + 'px';
      zoomImage.style.marginTop = -(top * scale) + 'px';
    });
  });
})();



(function(){
  var zoomArea = document.querySelector('.zoom-area-0');
  var zoomImage = zoomArea.querySelector('img');
  var size = 172;
  var scale = 300 / size;
  Array.prototype.forEach.call(document.querySelectorAll('.m-lens-container-0'), function(container){
    var lens = container.querySelector('.m-lens-0');
    var img = container.querySelector('img');
    container.addEventListener('mouseenter', function(){
      var image = container.querySelector('img');
      zoomArea.classList.add('active');
      zoomImage.setAttribute('src', image.src);
      zoomImage.style.width = (image.offsetWidth * scale) + 'px';
    });
    container.addEventListener('mouseleave', function(){
      zoomArea.classList.remove('active');
    });
    var xmax, ymax;
    img.addEventListener('load', function(){
       xmax = img.offsetWidth - size;
       ymax = img.offsetHeight - size;
    });
    container.addEventListener('mousemove', function(e){
      var rect = container.getBoundingClientRect();
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var positionX = rect.left + window.pageXOffset;
      var positionY = rect.top + window.pageYOffset;
      var offsetX = mouseX - positionX; 
      var offsetY = mouseY - positionY; 
      var left = offsetX - (size / 2);
      var top = offsetY - (size / 2);

      if(left > xmax){
        left = xmax;
      }
      if(top > ymax){
        top = ymax;
      }
      if(left < 0){
        left = 0;
      }
      if(top < 0){
        top = 0;
      }
      lens.style.top = top + 'px';
      lens.style.left = left + 'px';
      zoomImage.style.marginLeft = -(left * scale) + 'px';
      zoomImage.style.marginTop = -(top * scale) + 'px';
    });
  });
})();