import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAssRead = time =>{
    console.log('mark as read',time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAssRead={handleMarkAssRead}></Blogs>
      <Bookmarks bookmarks ={bookmarks}></Bookmarks>

      </div>
    </>
  )
}

export default App
