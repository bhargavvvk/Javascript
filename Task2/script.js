
let exp = "";
function displayinput(){
    var input = document.getElementById("display");
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function(){

            if (this.innerHTML === "=") {
                if (exp.trim() === "") {
                    input.value = 0;
                    return;
                }
                if (exp.slice(-1)=== "+" || exp.slice(-1) === "-" || exp.slice(-1) === "*" || exp.slice(-1) === "/") {
                    exp = exp.slice(0, -1);
                    input.value = exp;
                    alert("Expression cannot end with an operator. The last operator has been removed.");
                    return;
                }
                try {
                    exp = eval(exp);
                    exp=String(exp);
                    input.value = exp;
                } catch (e) {
                    input.value = "Error";
                }
            } else if (this.innerHTML === "C") {
                exp = "";
                input.value = 0;
            } 
            else if (this.innerText === "DEL") {
                exp = exp.slice(0, -1);
                input.value = exp || 0;
            }
            else {    
                console.log(this.innerHTML);
                exp += this.innerHTML;
                input.value = exp;
            }
        });
    });    
}   

displayinput();