import React from 'react'

const PostItem = (props) => {

  return (
    <div className="post">
      <div className='post__content'>
        <strong> {props.post.id}.{props.post.title} </strong>
        <div>
          {props.post.body}
        </div>
      </div>
      
      <div className='post__btns'></div>
      <button>Удалить</button>
    </div>
  
  )
}
export default PostItem