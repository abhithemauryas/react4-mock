import React, {useState,useEffect} from 'react'
 
function Mybook() {
    const [book, setBooks]=useState([])
    const [filterBook, setfilterBook]=useState("")
    const [sortBy, setSortBy]=useState("")

    let url=`https://joyous-pink-crab.cyclic.cloud/get`;
    
    const fetchbooks=async()=>{
        try {
            if(filterBook  ||sortBy){
                url+=`/filter?price=${filterBook}&sortBy=${sortBy}`
            }
            const response=await fetch(url)
            console.log(url)
            const data =await response.json()
            setBooks(data.data)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        fetchbooks()
    },[filterBook,sortBy])
    const handleDelete=async(id)=>{
        try {
            await fetch(`https://joyous-pink-crab.cyclic.cloud/delete/${id}`,{
                method: 'DELETE'
            })
            fetchbooks()
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
      <div><h1 className='my-book'>My Book</h1></div>
    <div>
     <label  >Filter by Gener</label>
     <select name=""  placeholder='Choose your Genre' id="same-size" value={filterBook}  onChange={(e)=>setfilterBook(e.target.value)}>
               <option value="">All</option>
               <option value="Fiction">Fiction</option>
               <option value="Science">Science</option>
               <option value="Comic">Comic</option>
    </select>
    <label>Sort By Price</label>
     <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} id="same-size">
    
     <option value="asc">Low To High</option>
     <option value="desc">High To Low</option>
     </select>

     <select name="" id="">
        <button onClick={fetchbooks}>Apply</button>
     </select>
    
    <div>
        {book.map((get)=>{
            return <div key={get._id} className='book-card'>
            <h3>{get.title}</h3>
            <p>author: {get.author}</p>
            <p>genre:{get.genre}</p>
            <p>description{get.description}</p>
            <p>price{get.price}</p>
            <button onClick={()=>handleDelete(get._id)}>Delete</button>
            </div>
        })}
    </div>

    </div>



    </div>
  )
}

export default Mybook
