

type propsType = {
    data : todosType[],
    delCall : (x : number) => void
    checkCall : (x : todosType) => void
    editCall : (x : todosType) => void


}

const Todos = ({data, delCall, checkCall, editCall} : propsType) => {
 return (
    <div>

        {
            data && data.map((i) => (

                <div 
                key={i.id}
                className=" flex-col sm:flex-row md:flex-row container border-2 m-2 w-[90%] md:w-[70%] flex sm:justify-between md:items-center mx-auto">

               <div className="flex items-center">
               <input 
                onChange={() => checkCall(i)}
                type="checkbox" 
                title="todo" 
                className="sm:h-[20px] sm:m-2 h-[20px] m-2 md:m-2 sm:mt-[100px] p-2 md:h-5 sm: md:w-5 text-blue-600" />
            
                <p className={`  ${i.isChecked ? 'line-through ' : ''}  md:mt-4 inline md:mb-4 md:p-2`}>
                   {i.task}
                          
                        

                </p>
            
               </div>
              <div className="sm:flex justify-center items-center m-2 p-2">
              <button 
                  onClick={() => editCall(i)}
                  className= "m-2 bg-blue-500 sm:w-[90px]  hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                    Edit
                  </button>
            
                  <button 
                  onClick={ () => delCall(i.id)} 

                  className={` bg-blue-500  sm:w-[90px]sm: md:m-2 p-2 hover:bg-blue-700 text-white font-bold py-2 px-4 `}>
                  Delete
                   </button>
              </div>
            
            
                </div>

                
            ))
        }

  
    </div>

 )
}

export default Todos