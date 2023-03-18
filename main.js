let theinput=document.querySelector(".add-task input");
let addButton=document.querySelector(".add-task .plus");
let taskContainer=document.querySelector(".tasks-content");
let noTasksMsg=document.querySelector(".no-tasks-massage");
let taskcount=document.querySelector(".tasks-count span");
let taskcompleted=document.querySelector(".tasks-completed span");
// console.log(theinput);

window.onload = function () {
    theinput.focus();
};

addButton.onclick= function(){
    
    if(theinput.value ===""){
        
    }else{

        if(document.body.contains(document.querySelector(".no-tasks-massage"))){

            noTasksMsg.remove();
        };

        let mainSpan=document.createElement("span");
        let deleteElemet=document.createElement("span");

        let spantext=document.createTextNode(theinput.value);
        let deletetext=document.createTextNode("Delete");

        mainSpan.appendChild(spantext);
        mainSpan.className="task-box";

        deleteElemet.appendChild(deletetext);
        deleteElemet.className="delete"

        mainSpan.appendChild(deleteElemet)

        taskContainer.appendChild(mainSpan);

        theinput.value="";
        theinput.focus();

        calcTasks();

    };
};

document.addEventListener("click",function(e){
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
    };
    if(taskContainer.childElementCount===0){
        createNoMsg();
    }
    
    if(e.target.classList.contains("task-box")){
        e.target.classList.toggle("finished");
    };

    calcTasks();
});


function createNoMsg(){
    let msgSpan=document.createElement("span");
    let msgText=document.createTextNode("no-tasks-massage");

    msgSpan.appendChild(msgText);
    msgSpan.className="no-tasks-massage";

    taskContainer.appendChild(msgSpan);
};
function calcTasks(){
    taskcount.innerHTML=document.querySelectorAll(".tasks-content .task-box").length;
    taskcompleted.innerHTML=document.querySelectorAll(".tasks-content .finished").length;
};