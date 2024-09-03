import { dataset } from "../Dataset"
function Courses() {
  return (
   <>
  <div className="flex flex-wrap p-5 gap-5 justify-center items-center">
    {dataset.map((course)=>
    
    <div key={course.id} class="max-w-sm bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
        <img class="rounded-t-lg h-48 mx-auto " src={course.image} alt="" />
    
    <div class="p-5">
     
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</h5>
     
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.description}.</p>
       
    </div>
</div>
    
    )}
  </div>



   </>
  )
}

export default Courses