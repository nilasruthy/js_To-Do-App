const todolist=[{name:'Work',
                 date:'2023-02-21'},
                 {name:'Walk',
                 date:'2023-02-21'}];
renderTodoList();

function renderTodoList(){


         let todoListHTML ='';
         for(let i=0; i<=todolist.length-1; i++){
             const valueObj= todolist[i];
            //  let name=valueObj.name;
            //  let date=valueObj.date;
             const {name,date}=valueObj;
             console.log(todolist[i]);
             const html=`
             <div>${name}</div>
             <div>${date}</div>
             
            <button class="delete-todo-button" onClick="todolist.splice(${i},1);
            renderTodoList();
            ">
                Delete
            </button> 
           
             `;
             todoListHTML +=html;
             // console.log(todolist);
         }
         console.log(todoListHTML);
 
         document.querySelector('.js-displaylis').innerHTML=todoListHTML; 
 }
 
 
 

function addTodo(){
   const inputElement= document.querySelector('.js-todotxt');
   const name=inputElement.value;
//    todolist.push(name);

  

   const dateinputElement=document.querySelector('.js-tododatebtn')
   const date=dateinputElement.value;
   todolist.push({name,date}); 
   renderTodoList();
   inputElement.value='';
   dateinputElement.value='';
}