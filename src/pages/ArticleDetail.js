import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';

export const ArticleDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
