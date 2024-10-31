let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

decInp.addEventListener("input", () => {
    decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2);
});
binInp.addEventListener("input", () =>{
    let binValue = binInp.value;
    if(binVald(binValue)){
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }
    else{
        errorMsg.textContent = "Please Enter A Valid Binary Input";
    }
    function binVald(num){
        for(let i = 0; i < num.length; i++){
            if(num[i] != "0" && num[i] !="1" && num[i]!="-"){
                return false;
            }
        }
        return true;
    }
});