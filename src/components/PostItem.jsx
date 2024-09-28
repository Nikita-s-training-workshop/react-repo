import React from 'react'

const PostItem = (props) => {
  console.log(props)
  return (
    <div className="post">
      <div className='post__content'>
        <strong>1. JavaScript</strong>
        <div>
          JavaScript - язык программирования
        </div>
      </div>
      
      <div className='post__btns'></div>
      <button>Удалить</button>
    </div>
  
  )
}
export default PostItem