import React from 'react';
import { posts } from '../data/posts';
import classes from './css/ArticleList.module.css';

export const ArticleList = () => {
  return (
    <div className={classes.container}>
      <ul>
        {
          // mapメソッドで記事データを取得し繰り返し表示
          posts.map(post => (
            <li key={post.id} className={classes.postList}>
              <div className={classes.postWrapper}>
                {/* 日付をJavascriptのnew Date()で返し、toLocaleDateString()で整えて表示する */}
                <time className={classes.postDate}>{new Date(post.createdAt).toLocaleDateString()}</time>
                {/* カテゴリーをmapメソッドで取得し表示する */}
                <div>
                  {post.categories.map((category) => {
                    return (
                      <span key={category} className={classes.postCategory}>{category}</span>
                    );
                  })}
                </div>
              </div>
              <h2>{post.title}</h2>
              {/* ReactでHTMLをそのまま表示:dangerouslySetInnerHTML属性を使用 */}
              <p className={classes.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></p>
            </li>
          ))}
      </ul>
    </div>
  );
}
