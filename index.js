let mainArray = [];
let selection = document.querySelector(".pr");
let buttons = document.querySelectorAll(".c");

function main(){for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){
        let input=(this.textContent);
        selection.textContent += input;
        mainArray.push(input);

        
        
    })
}};
main();


let aC = document.querySelector(".AC");
aC.addEventListener("click",function(){
 location.reload();
}
);

let point = document.querySelector(".dot");
point.addEventListener("click",function(){
    selection.textContent += point.textContent;
});

let operators = document.querySelectorAll(".o");

for(let i=0;i<operators.length;i++)
{
    operators[i].addEventListener("click",function(){

        selection.textContent += this.textContent;
        mainArray.push(this.textContent)
    });
}


let MainSign = document.querySelector(".equal");
MainSign.addEventListener("click",function(){
    let output=mainArray.join("");
    selection.textContent = eval(output);
    MainSign.addEventListener("mouseout",function(){location.reload()})
    
})
