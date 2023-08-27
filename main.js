// let input =document.querySelector('input')

document.querySelector('input').onkeyup=(as)=>{
if(as.key=='Enter'){
    navigator.clipboard.writeText(`  تم ${Number(document.querySelector('input').value)}`)

}
}