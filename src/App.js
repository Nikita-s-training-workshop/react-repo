import React, { useState } from 'react'
import './styles/App.css'
import {PostList} from './components/PostList'
import {MyButton} from './components/UI/button/MyButton'
import {MyInput} from './components/UI/input/MyInput'

const INITIAL_STATE = [
  {id:1, title: 'JavaScript', body:'Description'},
  {id:2, title: 'JavaScript 2', body:'Description'},
  {id:3, title: 'JavaScript 3', body:'Description'}
]

export const App = () => {
  
  const [posts, setPosts] = useState(INITIAL_STATE)
  const addNewPost = () => {
  
  }
  
  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Название поста' />
        <MyInput type='text' placeholder='Описание поста' />
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  )
}

