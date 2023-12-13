let menuScroll = document.getElementById('menu').clientHeight
let menuChild = document.getElementsByClassName('scroll')
window.addEventListener('scroll' ,()=>{
    let x = window.scrollY
    if((menuScroll / 2) < x){
        document.getElementById('menu').style.background = '#fff'
        // document.getElementById('menu').style.boxShadow = '0 0 2px 2px #222'
        document.getElementById('one').style.color = '#222'
        document.getElementById('two').style.color = '#222'
        document.getElementById('three').style.color = '#222'
        document.getElementById('four').style.color = '#222'
        document.getElementById('five').style.color = '#222'
        document.getElementById('six').style.color = '#222'
        document.getElementById('seven').style.color = '#222'
        document.getElementById('eight').style.color = '#222'
        document.getElementById('nine').style.color = '#222'
        document.getElementById('ten').style.color = '#222'
        document.getElementById('one-2').style.color = '#222'
        document.getElementById('two-2').style.color = '#222'
        document.getElementById('three-2').style.color = '#222'
        document.getElementById('four-2').style.color = '#222'
        document.getElementById('five-2').style.color = '#222'
        document.getElementById('logo-m-2').style.display = 'flex'
        document.getElementById('logo-m-1').style.display = 'none'
        document.getElementById('logo-d-2').style.display = 'flex'
        document.getElementById('logo-d-1').style.display = 'none'
        
    }else{
        document.getElementById('menu').style.background = 'rgba(0, 0, 0, 0)'
        // document.getElementById('menu').style.boxShadow = '0 0 2px 2px rgba(0, 0, 0, 0)'
        document.getElementById('one').style.color = '#fff'
        document.getElementById('two').style.color = '#fff'
        document.getElementById('three').style.color = '#fff'
        document.getElementById('four').style.color = '#fff'
        document.getElementById('five').style.color = '#fff'
        document.getElementById('six').style.color = '#fff'
        document.getElementById('seven').style.color = '#fff'
        document.getElementById('eight').style.color = '#fff'
        document.getElementById('nine').style.color = '#fff'
        document.getElementById('ten').style.color = '#fff'
        document.getElementById('one-2').style.color = '#fff'
        document.getElementById('two-2').style.color = '#fff'
        document.getElementById('three-2').style.color = '#fff'
        document.getElementById('four-2').style.color = '#fff'
        document.getElementById('five-2').style.color = '#fff'
        document.getElementById('logo-m-2').style.display = 'none'
        document.getElementById('logo-m-1').style.display = 'flex'
        document.getElementById('logo-d-2').style.display = 'none'
        document.getElementById('logo-d-1').style.display = 'flex'
    }
})
const text = document.getElementById('text')
text.innerHTML = text.textContent.replace(/\S/g,"<span class='text2 -top-[0%]'>$&</span>")
const ele = document.querySelectorAll('.text2')
for(var i=0 ; i<ele.length; i++){
    ele[i].style.transform = "rotate("+i*12+"deg)"
}