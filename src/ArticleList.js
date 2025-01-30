import React from 'react';
import { posts } from './date/posts';

export const ArticleList = () => {
  return (
    <div className="container">
      <ul>
        {
          // mapメソッドで記事データを取得し繰り返し表示
          posts.map(post => (
            <li key={post.id} className="postList">
              <div className="postWrapper">
                {/* 日付をJavascriptのnew Date()で返し、toLocaleDateString()で整えて表示する */}
                <time className="postDate">{new Date(post.createdAt).toLocaleDateString()}</time>
                {/* カテゴリーをmapメソッドで取得し表示する */}
                <div>
                  {post.categories.map((category) => {
                    return (
                      <span key={category} className="postCategory">{ category}</span>
                    );
                  })}
                </div>
              </div>
              <h2>{post.title}</h2>
              {/* ReactでHTMLをそのまま表示:dangerouslySetInnerHTML属性を使用 */}
              <p className="postContent" dangerouslySetInnerHTML={{ __html:post.content }}></p>
            </li>
        ))}
      </ul>
    </div>
  );
}
