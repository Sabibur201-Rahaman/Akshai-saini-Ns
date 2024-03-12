function AttachListener(){
    let count=0;
    document.getElementById('my click').addEventListener('click',function(){
        console.log('buttonClicked',++count)
    })
}
AttachListener()