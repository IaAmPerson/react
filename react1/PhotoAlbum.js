import React,{useState,useEffect} from 'react';
import firebase from './firebase';

const dataSave = (image, title, caption)=>{

  	firebase.database().ref('react-firebase/' + 'testing').set({
    	image: 'image',
    	caption: 'caption',
    	title: 'title',
})
}
const DataPull = () => {
  	let [data,setData] = useState([])
  	useEffect(()=>{
    let firebasePull = firebase.database().ref('react-firebase/').on('value',(snapshot) => {
      	let reference = snapshot.val()
      	let array = Object.entries(reference)
      	setData(array)
      	})
  
    return () => firebasePull()
  },[])
  return data
}

const PhotoAlbum = () => {
  let [image,setImage] = useState('')
  let [caption,setCaption] = useState('')
  let [title,setTitle] = useState('')

  let data = DataPull()
  console.log(data)

  let handleTitle = (e) => {
    setTitle(e.target.value)
    console.log(title)
  }
  let handleCaption = (e) => {
    setCaption(e.target.value)
  }
    let handleImage = (e) => {
      setImage(e.target.value)
  }
  let handleClick = (e) => {
    dataSave(image, title, caption)
  }
  return (
    <div>
      <h1>This is my photo album</h1>
      <br/>
      Title: <input onChange={handleTitle}></input>
      Image URL: <input onChange={handleImage}></input>
      Caption: <input onChange={handleCaption}></input>
      <button onClick = {handleClick}>Show me the pictures</button>
        {
          data.map((elem)=>{
          return(
            <div key={elem}>
            <h1>{elem[1].title}</h1>
            <img src = {elem[1].picture} width = '300' />
            <p>{elem[1].caption}</p>
            </div>


          )
            
        })}

    </div>
          )

  
}
export default PhotoAlbum;