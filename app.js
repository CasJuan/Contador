let contador = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrement")){
            contador--;
        }else if(style.contains("increment")){
            contador++;
        }else if(style.contains("reset")){
            contador = 0;
        }

        if(contador > 0){
            value.style.color = "green";
        }else if (contador < 0 ){
            value.style.color = "red";
        }else if (contador === 0){
            value.style.color = "#222";
        }

        value.textContent = contador;
    })
})