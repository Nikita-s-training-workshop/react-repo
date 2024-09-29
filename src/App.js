import React, { useState } from 'react'
import './styles/App.css'
import {PostList} from './components/PostList'

export const App = () => {
  const postObjectsArray = [
    {id:1, title: 'JavaScript', body:'Description'},
    {id:2, title: 'JavaScript 2', body:'Description'},
    {id:3, title: 'JavaScript 3', body:'Description'}
  ]
  const [posts, setPosts] = useState(postObjectsArray)
  
  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Название поста' />
        <input type='text' placeholder='Описание поста' />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  )
}

