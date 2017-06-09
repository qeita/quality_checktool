# クオリティチェックツール

[README整理中]  
漏れ抜けがないか確認できるチェックツール系を調べつつ試し、そこで得た知見をまとめる。  
  
## - 圧縮したJavascriptの差分チェック方法  
  
1. `js-beautify`をグローバルでインストール。  
`npm install -g js-beautify`  
  
2. リポジトリ直下で以下コマンドを実行。  
`git config --global diff.minjs.textconv js-beautify`  
`git config --global diff.minjs.cachetextconv true`  


3. `.gitattributes`ファイルを公開用ディレクトリに格納。  
※ 上記ファイルの格納先によって、差分対象となるファイルが変わるため注意。   
[.gitattributes]  
`*.js diff=minjs`  


4. `git diff`コマンドで圧縮ファイルの差分をチェックできる。  
※ Sourcetree上での確認はできず。 


参考)    
[http://qiita.com/castor4bit/items/782ca023e92ae6ff8e51](http://qiita.com/castor4bit/items/782ca023e92ae6ff8e51)  
[https://cweiske.de/tagebuch/git-diff-minified-js.htm](https://cweiske.de/tagebuch/git-diff-minified-js.htm)  
  



