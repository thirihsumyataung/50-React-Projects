import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits , removeStory} = useGlobalContext();
  //console.log(isLoading); 
  if (isLoading) {
    return <div className="loading">
      
    </div>
  }
  return <section className="stories">
    {hits.map((story) => {
      console.log(story);
      const { objectID, num_comments , title, url, points, author} = story
      return <article key={objectID} className="story" >
        <h4 className="title">{title}</h4>
        <p className="info">{points} points by <span>{author} | </span>
          {num_comments} {' '}
        </p>
        <div>
          <a href={url} className="read-link" target="_blank" rel="noreferrer">
          read more
          </a>
        </div>
        <button className="remove-btn" onClick={() => {removeStory(objectID)}}>
          remove
        </button>
      </article>
    })}
  </section> 
}

export default Stories
