let menuScroll = document.getElementById('menu').clientHeight
let menuChild = document.getElementsByClassName('scroll')
window.addEventListener('scroll' ,()=>{
    let x = window.scrollY
    if((menuScroll / 2) < x){
        document.getElementById('menu').style.background = '#fff'
        
    }else{
        document.getElementById('menu').style.background = 'rgba(0, 0, 0, 0)'
    }
})
function shop(s){
let y = s.getAttribute('data-img')
let z = s.getAttribute('data-title')
document.getElementById('detail').style.display = 'flex'
document.getElementById('detailImg').setAttribute('src' , y)
document.getElementById('title').innerHTML = z
}
document.getElementsByClassName('close')[0].addEventListener('click' , ()=>{
    document.getElementById('detail').style.display = 'none'
    document.getElementById('detailImg').setAttribute('src' , '')
    document.getElementById('title').innerHTML = ''

})