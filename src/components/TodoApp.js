import React, { useState } from "react";


const TodoApp = () => {
    const [currentTask,setCurrentTask] = useState('')
    const[allTasks,setAllTasks] = useState([]);
    const[editingIndex,setEditingIndex] = useState(undefined);


    const handleonChange=(event)=>{
        if(event.target.value.length >10) return;
        setCurrentTask(event.target.value)
    }
    const handleonclick = ()=>{
      const isAddingNewTasks = editingIndex == undefined;
    if(isAddingNewTasks){
      if(currentTask.length>0){
        setAllTasks([...allTasks,currentTask])
        setCurrentTask('')
      }
    }else{
      const allOldTasks=[...allTasks];
      allOldTasks[editingIndex]=currentTask;
      setAllTasks(allOldTasks)
      setCurrentTask('')
    }
      }

      const handleEdit =(index)=>{
        setEditingIndex(index);
        setCurrentTask(allTasks[index]);
      }
   
  return (
    <>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <div style={{width:500,marginTop:'100px'}}>

        <div className="col-auto">
          <input 
          type="text" 
          class="form-control" 
          id="inputPassword2" 
          placeholder="Add-todo"
          value={currentTask}
          onChange={handleonChange}
          />
        </div>

        <button 
        type="submit" 
        class="btn btn-primary mb-3" 
        style={{marginTop:'10px'}}
        onClick={handleonclick}
        >
          Add Task
        </button>

      </div>
      </div>

      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    {
        allTasks.map((task,index)=>{
            return(
                <tr>
      <th scope="row">{index+1}</th>
      <td>{task}</td>
      <td>
        <button className="btn btn-secondary" 
        onClick={()=>{
          handleEdit(index)
        }}
        >Edit</button>
        <button className="btn btn-danger">Delete</button>
        </td>
     
    </tr>
            )
        
    })
}
  </tbody>
</table>
   
    </>
  );
};

export default TodoApp;
