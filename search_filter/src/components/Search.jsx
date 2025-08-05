import { useState } from "react";

export default function Search(){
    let [array, setArray]=useState(["Apple","banana","carrot","deer","elephant","fox","hen"])
    let [inputSearch, setSearch] = useState("")

    let filterdArray=array.filter((el)=>el.toLowerCase().includes(inputSearch.toLowerCase()))


    const highlightMatch = (text, query) => {
        if (!query) return text;
    
        const index = text.toLowerCase().indexOf(query.toLowerCase());
    
        if (index === -1) return text;
    
        const before = text.slice(0, index);
        const match = text.slice(index, index + query.length);
        const after = text.slice(index + query.length);
    
        return (
          <>
            {before}
            <mark>{match}</mark>
            {after}
          </>
        );
      };

    return(<>
        <input value={inputSearch} onChange={(e)=>setSearch(e.target.value)}></input>
        <div>
            {
            filterdArray.length>0?
            (filterdArray.map((el,i)=>
                <div key={i}>{highlightMatch(el,inputSearch)}</div>)
            ) : (<div>Not Found</div>)
            }
        </div>
    </>)
}  