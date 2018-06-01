window.addEventListener('load',function(){
    document.getElementById('taskvalue').focus();
    //function to add Elements into the DOM
    var button = document.getElementById('submit');

    //function to create and append element
    function addTask(e){
        e.preventDefault();
        var task = document.getElementById("taskvalue");
        var time = document.getElementById('timevalue');
        if(task.value!=="" && task.value!= null){
            console.log(task.value);
            console.log(time.value);
            
            var work = document.createElement('div');
            work.setAttribute('class','task');
            work.innerHTML = task.value;
            
            var dueTime = document.createElement('div');
            dueTime.setAttribute('class','time');
            dueTime.textContent = time.value;

            var del = document.createElement('div');
            del.innerHTML = "&nbsp;X&nbsp;";
            del.setAttribute('class','delete');

            var elList = document.createElement('li');
            elList.appendChild(work);
            elList.appendChild(dueTime);
            elList.appendChild(del);

            var parent = document.getElementById('mylist');
            parent.appendChild(elList);

            document.getElementById("taskvalue").value=null;
            document.getElementById('timevalue').value=null;

        }
    }

    //adding event Listener
    if(button.addEventListener){
        button.addEventListener('click',addTask,false);
    }else{
        button.attachEvent('click',addTask,false);
    }

});


//USING EVENT DELEGATION TO REMOVE THE ELEMENTS WHICH ARE DONE
window.addEventListener('load',function(){

    var myList = document.getElementById('mylist');

    function returnTarget(e){
        if(!e){
            e=window.event;
        }
        return e.target || e.srcElement;
    }

    function removeTask(e){
        var target = returnTarget(e);
        if(target.className == "delete"){
            var parent = target.parentNode;
            var grandParent = parent.parentNode;
            grandParent.removeChild(parent);
        }
    }


    if(mylist.addEventListener){
        mylist.addEventListener('click',removeTask,false);
    }else{
        mylist.attachEvent('click',removeTask,false);
    }

});