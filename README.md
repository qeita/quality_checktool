# クオリティチェックツール

[README整理中]  
漏れ抜けがないか確認できるチェックツール系を調べつつ試し、そこで得た知見をまとめる。  
  
## - 圧縮したJavascriptの差分チェック方法  
  
設定手順:  
1. `js-beautify`をグローバルでインストール。  
`npm install -g js-beautify`  
  
2. リポジトリ直下で以下コマンドを実行。  
※ gitの設定情報は`git config --list`で確認できる。  
※ gitの設定値を削除するには、`git config --unset [キー名]`を行う。  
`git config --global diff.minjs.textconv js-beautify`  
`git config --global diff.minjs.cachetextconv true`  


3. `.gitattributes`ファイルを公開用ディレクトリに格納。  
※ 上記ファイルの格納先によって、差分対象となるファイルが変わるため注意。   
[.gitattributes]  
`*.js diff=minjs`  


4. `git diff`コマンドで圧縮ファイルの差分をチェックできる。  
※ Sourcetree上での確認はできず。 
  
  
確認方法:  
圧縮かけてもdiffを取り損ねる可能性があることから、minify実行後、以下の処理を実行するようスクリプトで自動化。  
1. `git diff`で差分を取得  
2. 取得した差分結果をログファイルとして出力  
  
例)  
package.jsonのnpm scriptsに以下コマンドを記述  
`"webpack --config webpack/webpack.pub.js && mkdir -p log && git diff > ./log/diff.`date '+%Y%m%d_%H%M%S'`"`



参考)    
[http://qiita.com/castor4bit/items/782ca023e92ae6ff8e51](http://qiita.com/castor4bit/items/782ca023e92ae6ff8e51)  
[https://cweiske.de/tagebuch/git-diff-minified-js.htm](https://cweiske.de/tagebuch/git-diff-minified-js.htm)  
[http://qiita.com/hijion/items/ae2cccebf5d28ff733f3](http://qiita.com/hijion/items/ae2cccebf5d28ff733f3)  
  



