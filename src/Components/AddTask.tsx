
import  { useState } from 'react';

type propsType = {
    calldata : (x : todosType) => void,
}

const AddTask = ({calldata} : propsType ) => {

 const [todoData, setTodoData] = useState<todosType>({task : '', id : Date.now(), isChecked : false});

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData({ ...todoData, [e.target.name]: e.target.value });
 };
 


 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calldata(todoData)
    setTodoData({task : '', id : Date.now(), isChecked : false})

   };

 return (

    <div className=" flex justify-center items-center">


    <form onSubmit={handleSubmit} className="m-2">
    
      
        <input
          className="border p-2 m-2 outline-none border-gray-500"
          id="email"
          type="text"
          name="task"
          value={todoData.task}
          onChange={handleChange}
          placeholder="Add Todos"
        />

      <button
      disabled={todoData.task === ''}
      type='submit'
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 "
    >
      Add
    </button>

      </form>
      </div>
        


      )
      

}

export default AddTask