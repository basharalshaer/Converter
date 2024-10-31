let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

decInp.addEventListener("input", () => {
    let decValue = decInp.value;
    if(octVald(decValue)){
        decValue = parseInt(decInp.value);
        binInp.value = decValue.toString(2);
        errorMsg.textContent = "";
    }
    else{
        errorMsg.textContent = "Please Enter A Valid Octa Input";
    }
    function octVald(num){
        for(let i = 0; i < num.length; i++){
            if(num[i] != "0" && num[i] != "1" && num[i] != "2" && num[i] != "3" && num[i] != "4" && num[i] != "5" && num[i] != "6" && num[i] != "7"){
                return false;
            }
        }
        return true;
    }
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