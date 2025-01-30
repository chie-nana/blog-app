import React from 'react';
import { posts } from './date/posts';

export const ArticleList = () => {
  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <p>{ post.date}</p>
              <p></p>
              <h2>{ post.title}</h2>
            </li>
        ))}
      </ul>
    </div>
  );
}
