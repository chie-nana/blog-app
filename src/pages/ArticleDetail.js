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
          <div className={classes.postWrapper}>
            <time className={classes.detailDate}>{new Date(post.createdAt).toLocaleDateString()}</time>
            <div>{
              post.categories.map((category) => {
                return (
                  <span key={category} className={classes.postCategory}>{category}</span>
                );
              })}
            </div>
          </div>
          <h2>{post.title}</h2>
          <p className={classes.detailContent} dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      </div>
    </>
  );
};
