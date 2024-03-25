const test = document.getElementById('header-site')
const txtNav = document.querySelectorAll('#textNav ul li a')
const image1 = document.getElementById('img1')
const texta = document.getElementById('h3')
const textb = document.getElementById('text-contentb')
const tb = document.getElementById('tb')
const Cad = document.getElementById('tk')
console.log(txtNav)
window.onscroll = () => {
  if(document.documentElement.scrollTop > 450 || document.body.scrollTop > 450 && document.documentElement.sc)
  {
    test.classList.add('scrolled')
    texta.classList.add('addAnimaH3')
  }else{
    test.classList.remove('scrolled')
    texta.classList.remove('addAnimaH3')
  }

  if(document.documentElement.scrollTop >450 || document.body.scrollTop >450)
  {
   image1.classList.add('scrollImg1')
  }else{
   image1.classList.remove('scrollImg1')
  }

  if(document.documentElement.scrollTop >1300 || document.body.scrollTop >1300)
  {
   textb.classList.add('scrollTextb')
  }else{
   textb.classList.remove('scrollTextb')
  }
 
  if(document.documentElement.scrollTop >1400 || document.body.scrollTop >1400)
  {
   tb.classList.add('scrollTable')
  }else{
   tb.classList.remove('scrollTable')
  }

  if(document.documentElement.scrollTop >1990 || document.body.scrollTop >1990)
  {
    Cad.classList.add('scrollCard')
  }else{
    Cad.classList.remove('scrollCard')
  }
}
// đã xử lý phần navbar
document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      var hHeight = document.querySelector('#header-site').offsetHeight;
      var target = document.querySelector(this.hash);
      if (target) {
          var targetOffset = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
              top: targetOffset - hHeight,
              behavior: 'smooth'
          });
      }
  });
});
