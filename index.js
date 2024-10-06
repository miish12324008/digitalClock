setInterval(function(){
    document.querySelector(".clock").textContent = new Date().toLocaleString()
},1000)