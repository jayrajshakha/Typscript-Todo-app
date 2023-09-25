import { useState } from "react"
import AddTask from "./Components/AddTask"
import Todos from "./Components/Todos"

const App = () => {

    const [todosArray, setTodosArray] = useState<todosType[]>([])
    
const callbackfun = (x : todosType) => {
    // const newArray =

    setTodosArray( [...todosArray, x])
    

}

const delFun = (x : number) => {
    
    const newArray : todosType[] = todosArray.filter(f => f.id !== x)

    setTodosArray(newArray)
    
}

const checkFun = (x : todosType) => {

    const newArray = todosArray.map((i) => i.id === x.id ? ( {...i, isChecked : !x.isChecked}) : i )

    setTodosArray(newArray)
    

}


  return (
    <div>
         <h1 className="text-4xl font-bold text-center m-2 text-blue-600">Todo App</h1>
         <div>

            <AddTask 
            calldata={callbackfun} />

            <Todos 
            data ={todosArray} 
            checkCall={checkFun} 
            delCall={delFun}/>
                
         </div>

    </div>
  )
}

export default App
