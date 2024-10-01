'use strict'


let apiURL="https://restcountries.com/v3.1/all";//url


fetch(apiURL).then(response=>
    {
        return response.json();
    }
).then(data=>
{
    Object.keys(data).forEach(key => {
        let grandParent=document.querySelector('body');
        let div=document.createElement('div')
        let title=document.createElement('legend');
        // let img=document.createElement('img')
        grandParent.appendChild(div);
        div.appendChild(title).textContent=data[key].name.common;
        div.innerHTML=`<legend>${data[key].name.common}</legend>
        <img src=${data[key].flags.png} alt=data[key].flags.png>` 
        // div.appendChild(img).innerHTML=`src=${data[key].flags.png}`;
        
        
        console.log(data[key].name.common);
        
       
    });
});