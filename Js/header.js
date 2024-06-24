document.addEventListener("scroll", function(){

  let NavClass = document.getElementById('header1'); 
  


  if(scrollY >= 80){ 
      NavClass.classList.remove('header');
      NavClass.classList.add('header2');
      
  }else if(scrollY <=45){
      NavClass.classList.add('header');
      NavClass.classList.remove('header2');
  }});
  
