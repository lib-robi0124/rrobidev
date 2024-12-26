function createTable() {
    rn = prompt("Input number of rows", 1);
    cn = prompt("Input number of columns",1);
    let a = 0;
    let b = 0;  
      if(Number(rn) !== parseInt(rn)){
        alert("Please enter valid Number for rows");
      }else if(Number(cn) !== parseInt(cn)){
        alert("Please enter valid Number for columns");
      }else{
        for(let r = 0;r < parseInt(rn); r++){
       let x=document.getElementById('myTable').insertRow(r);
       for(let c = 0;c < parseInt(cn); c++){
         let y =  x.insertCell(c);
         let a = r + 1;
         let b = c + 1;
         y.innerHTML="Row-"+a+" Column-"+b; 
      }
    }
    }
    }
    
    
    