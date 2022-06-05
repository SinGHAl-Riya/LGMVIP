window.addEventListener('load',()=>{
    const form = document.querySelector("#taskform");
    const input = document.querySelector("#taskinput");
    const listtask = document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("Fill the task");
            return;
        }
       const taskelement = document.createElement('div');
        taskelement.classList.add('task');

        const taskcontent = document.createElement('div');
        taskcontent.classList.add('content');
    
        taskelement.appendChild(taskcontent);

        const contentinput = document.createElement('input');
        contentinput.classList.add('text');
        contentinput.value = task;
        contentinput.setAttribute('readonly','readonly');
        taskcontent.appendChild(contentinput);

        const taskactions = document.createElement('div');
        taskactions.classList.add('actions');

        const editbutton = document.createElement('button');
        editbutton.classList.add('edit');
        editbutton.innerHTML = "Edit";

        const deletebutton = document.createElement('button');
        deletebutton.classList.add('delete');
        deletebutton.innerHTML = "Delete";

        taskactions.appendChild(editbutton);
        taskactions.appendChild(deletebutton);

        taskelement.appendChild(taskactions);
        listtask.appendChild(taskelement);


        
        input.value = '';

        editbutton.addEventListener('click',()=>{
            if(editbutton.innerText.toLowerCase() == "edit"){
                contentinput.removeAttribute("readonly");
                contentinput.focus();
                editbutton.innerText = "Save";
            }else{
                contentinput.setAttribute("readonly","readonly");
                editbutton.innerHTML = "Edit";
            }
        });

        deletebutton.addEventListener('click', ()=>{
            listtask.removeChild(taskelement);
        });

    });
});