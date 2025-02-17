import React, { useEffect, useState } from 'react';
import classes from '../css/ArticleList.module.css';
import { Link } from 'react-router-dom';

export const ArticleList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
        const data = await res.json();
        setPosts(data.posts)
      } catch (error) {
        console.log("データの取得に失敗しました", error);
      }
    };
    fetcher();
  }, []);
  return (
    <div className={classes.container}>
      <ul>
        {
          // mapメソッドで記事データを取得し繰り返し表示
          posts.map(post => (
            <li key={post.id} className={classes.postList}>
              <Link to={`/posts/${post.id}`} className={classes.postLink}>
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
                <p className={classes.postContent} dangerouslySetInnerHTML={{ __html: post.content }}>
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
