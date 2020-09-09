let input = document.getElementById("taskDescription");
//document.getElementsByTagName('input')[0]
//document.getElementsByClassName('form-control')[0]
let addBtn = document.getElementById('addBtn');
let tasksDiv = document.getElementById('tasksDiv');


// input.addEventListener('input', function(){
//     if(value.length < 4){
//         addBtn.setAttribute("disabled","true");
//         input.classList.add("invalid-input");
//     }
//     else{
//         addBtn.removeAttribute("disabled");
//         input.classList.remove("invalid-input");
//         input.classList.add("valid-input");
//     }
// });

addBtn.addEventListener('click',function(){
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let inputCb = document.createElement("input");
    let label = document.createElement("label");
    inputCb.setAttribute("type","checkbox");
    inputCb.classList.add("form-check-input","ml-1","mas");
    label.textContent = "Mark as Completed";
    label.classList.add("form-check-label","ml-4");
    h4.innerHTML = input.value;

    div.classList.add("shadow","mt-4","p-3","bg-warning","rounded");
  
    div.append(h4,inputCb,label);
    // console.log(div);
    tasksDiv.appendChild(div);
});

tasksDiv.addEventListener('click', function(event){
    let target = event.target;
    if(target.nodeName === 'INPUT'){
        let parent = target.parentNode;
        parent.classList.remove("bg-warning");
        parent.classList.add("bg-success","text-white");
        // setTimeout(function(){
        //     tasksDiv.removeChild(parent);
        // }, 3000);
    }
});

// let mas = document.getElementsByClassName('mas');
// for(let i = 0; i < mas.length; ++i){
//     mas[i].addEventListener('click',function(){
//         console.log("changed");
//     })
// }
