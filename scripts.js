
// Mobile Menu
  document.getElementById("hamburguer-icon").onclick=function(){
    document.getElementById("sliding-header-menu-outer").style.right="0";
  }

  document.getElementById("sliding-header-menu-close-button").onclick=function(){
    document.getElementById("sliding-header-menu-outer").style.right="-320px";
  }


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";
  
var elements=document.getElementsByClassName("single-tab");

for(var i=0;i<elements.length;i++){
  elements[i].onclick=function(){
    var show=this.innerHTML;
    document.getElementById("box-text").innerHTML=aboutUs[show];


    for(var j=0;j<elements.length;j++){
      elements[j].style.backgroundColor=unseletectedColor;
      elements[j].style.fontWeight="normal";
}

      this.style.backgroundColor=seletectedColor;
      this.style.fontWeight="bold";
}

}
// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

    var prevArrow=document.getElementById("service-previous");
    var nextArrow=document.getElementById("service-next");
    var heading=document.getElementById("service-title");
    var data=document.getElementById("service-text");
    var cuurentService=0;
     nextArrow.onclick=function(){
      if(cuurentService==ourServices.length-1){
           cuurentService=0;
           heading.innerHTML=ourServices[cuurentService].title;
           data.innerHTML=ourServices[cuurentService].text;
    }
       else{
       cuurentService=cuurentService+1;
       heading.innerHTML=ourServices[cuurentService].title;
        data.innerHTML=ourServices[cuurentService].text;
       }
}
prevArrow.onclick=function(){
  if(cuurentService==0){
       cuurentService=ourServices.length-1;
       heading.innerHTML=ourServices[cuurentService].title;
       data.innerHTML=ourServices[cuurentService].text;
}
   else{
   cuurentService=cuurentService-1;
   heading.innerHTML=ourServices[cuurentService].title;
    data.innerHTML=ourServices[cuurentService].text;
   }
}



// Footer
var d = new Date();
var n = d.getFullYear();
document.getElementById("current_year").innerHTML=n;


  
   


   