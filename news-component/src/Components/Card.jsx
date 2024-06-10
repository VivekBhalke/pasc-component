import { useEffect , useState } from "react";

const Card = ({element}) => {

  return (
    <div className="  bg-cardBackgorund shadow-lg rounded-xl flex flex-col items-start sm:flex-row gap-2 w-fit  sm:max-w-lg py-3 px-4 md:p-2">
          <div className=" h-full basis-2/5">
            <img src={element.imageUrl} className="object-fit" alt="image"/>
          </div>
          <div className="  flex flex-col sm:items-center justify-start basis-3/5 gap-2">
            <div className="  text-xl basis-[40%]  text-cardFirstText font-fiveHundered font-roboto my-0 mx-0">{element.title}</div>
            <div className=" text-content font-roboto font-fourHundered line-clamp-2 basis-[40%]">{element.content}</div>
            <div className= "  bg-neutral-200 basis-[30%]    rounded-xl flex flex-row pl-2 m-0 py-0 justify-between ">
               <div className="flex basis-[55%] flex-col mx-0 ">
                   <div className=" font-fiveHundered font-roboto px-1`">{element.author}</div>
                   <div className=" font-fourHundered font-roboto  text-sm">{element.date}</div>
               </div>
               <a className="  basis-[45%] p-0 m-0" href={element.readMoreUrl}>
                 <button className=" bg-buttonBackground text-readMore rounded-xl font-roboto font-fourHundered my-2 px-3 py-2 mx-1">
                     Read more
                 </button>
               </a>
            </div>
          </div>
        </div> 

    
  )
      
}


export default Card;


 
