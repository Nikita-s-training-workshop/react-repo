import React, { useState } from 'react'
import './styles/App.css'
import {PostList} from './components/PostList'

const INITIAL_STATE = [
  {id:1, title: 'JavaScript', body:'Description'},
  {id:2, title: 'JavaScript 2', body:'Description'},
  {id:3, title: 'JavaScript 3', body:'Description'}
]

export const App = () => {
  
  const [posts, setPosts] = useState(INITIAL_STATE)
  
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

