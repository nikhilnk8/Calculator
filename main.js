insert=(num)=>{
    document.getElementById('display').value += num;
}

calc = ()=>{
    const x = document.getElementById('display').value;
    document.getElementById('display').value = eval(x)
}

reset = () =>{
    document.getElementById('display').value = ""
}