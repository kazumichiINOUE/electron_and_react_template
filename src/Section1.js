import React from 'react';
import { marked } from 'marked'; // 名前付きインポートに変更

const Section1 = () => {
  const markdownContent = `
  ## ごあいさつ
  こんにちは．このページはElectron + Reactプロジェクトの雛形です．
  `;

  const htmlContent = marked(markdownContent);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  );
};

export default Section1;
