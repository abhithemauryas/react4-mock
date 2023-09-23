import React, {useState} from 'react'


function Addbook() {
     const [title, setTitle]=useState("")
     const [author, setAuthor]= useState("")
     const [genre, setGener]= useState("")
     const [description, setDescription]=useState("")
     const [price, setPrice]= useState("")

     const handleSubmit=async(e)=>{
        e.prevenDefault()
        const bookData={
            title,author,genre,description,price
        }
        try {
            const response = await fetch('https://joyous-pink-crab.cyclic.cloud/post',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(bookData)
            })
         if(response.ok){
            setTitle("");
            setAuthor("");
            setGener("")
            setDescription("")
            setPrice("")
         }else{
            console.log("Filed to post book data")
         }
        } catch (error) {
           console.log(error) 
        }
     }
  return (
    <div>
        <h1 className='add-book'>Add Book</h1>
        <form action="" onSubmit={handleSubmit} className='form-color'>
            <input type="text" placeholder='Enter Title' name="" id="same-size" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder='Enter Author' name="" id="same-size" value={author} onChange={(e)=>setAuthor(e.target.value)} />
            <select name=""  placeholder='Choose your Genre' id="same-size" value={genre}  onChange={(e)=>setGener(e.target.value)}>
               <option value="" id="same-size-gener">Genre</option>
               <option value="Fiction">Fiction</option>
               <option value="Science">Science</option>
               <option value="Comic">Comic</option>
            </select>
            <input type="text" placeholder='Description' name="" id="same-size" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="Number" placeholder='Price' name="" id="same-size" value={price}  onChange={(e)=>setPrice(e.target.value)} />
            <button type='submit' id="same-size-button">Submit</button>
        </form>
    </div>
  )
}

export default Addbook
