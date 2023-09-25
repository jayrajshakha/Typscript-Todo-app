import { useState } from "react"
import AddTask from "./Components/AddTask"
import Todos from "./Components/Todos"

const App = () => {

    const [todosArray, setTodosArray] = useState<todosType[]>([])
    const [editActive, setEditActive] = useState<boolean>(false)
    const [eTask, setEtask] = useState<todosType>()


const callbackfun = (x : todosType) => {
    const newArray = [...todosArray, x]
    // const a = newArray.filter(f => f.id === x.id)

    // const a  = newArray.map((i) => i.id === x.id ? null : i )

    setTodosArray(newArray)
    
    // console.log('new = ' ,newArray, 'a =' ,a,);

    setEditActive(false)

    
}

const delFun = (x : number) => {
    
    const newArray : todosType[] = todosArray.filter(f => f.id !== x)

    setTodosArray(newArray)
    
}

const checkFun = (x : todosType) => {

    const newArray = todosArray.map((i) => i.id === x.id ? ( {...i, isChecked : !x.isChecked}) : i )

    setTodosArray(newArray)
    

}
const editFun = (x : todosType) => {

    setEditActive(!editActive)
    const newArray = todosArray.filter(f => f.id === x.id)
    
    // setEditTask({newArray})  

    // console.log(newArray[0].task);
    setEtask(newArray[0])
    // setEditActive(editActive)
    
}

  return (
    <div>
         <h1 className="text-4xl font-bold text-center m-2 text-blue-600">Todo App</h1>
         <div>
            <AddTask 
            editZone={editActive}
            editData ={eTask}
            calldata={callbackfun} />
            <Todos 
            data ={todosArray} 
            checkCall={checkFun} 
            editCall ={editFun} 
            delCall={delFun}/>
                


         </div>

    </div>
  )
}

export default App
