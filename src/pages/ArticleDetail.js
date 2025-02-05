import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import classes from '../css/ArticleDetail.module.css';

export const ArticleDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <>
      <div className={classes.detailContainer}>
        <div className={classes.detailMain}>
          <div className={classes.detailImgBox}>
            <img className={classes.detailImg} src={post.thumbnailUrl} alt={post.title} />
          </div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
};
