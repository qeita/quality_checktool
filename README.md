# クオリティチェックツール

[README整理中]  
漏れ抜けがないか確認できるチェックツール系を調べつつ試し、そこで得た知見をまとめる。  
  

# 機能テスト  
  
## - End-to-Endブラウザテスト自動化(Nightwatch)  
  
設定手順:  
1. nightwatch本体のインストール  
`npm install nightwatch --save`、又は`yarn add nightwatch --dev`  
  
2. Selenium Serverをダウンロード  
※ [Selenium Download Page](http://selenium-release.storage.googleapis.com/index.html) よりダウンロードする方法と、npm経由でダウンロードの方法がある(ここでは後者)。  
※ yarnでインストールした際、node 6.9以上でないとダウンロードできなかった。
`npm install webdriver-manager --save`、又は `yarn add webdriver-manager --dev`  
  
3. `webdriver-manager`のアップデート及びインストールしたいブラウザのオプション指定  
`./node_modules/.bin/webdriver-manager update`  
`./node_modules/.bin/webdriver-manager update --chrome`  
  
4. プロジェクトルートに`nightwatch.json`を作成。  
※ selenium.server_pathに、ダウンロードしたSelenium本体のパスを指定。  
※ selenium.cli_args.webdriver.chrome.driverに、ダウンロードしたChromeDriverのパスを指定。  
  
    {  
      "src_folders" : ["tests"],  
      "output_folder" : "reports",  
      "custom_commands_path" : "",  
      "custom_assertions_path" : "",  
      "page_objects_path" : "",  
      "globals_path" : "",  
      "selenium" : {  
        "start_process" : true,  
        "server_path" : "node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",  
        "log_path" : "",  
        "port" : 4444,  
        "cli_args" : {  
          "webdriver.chrome.driver" : "node_modules/webdriver-manager/selenium/chromedriver_2.30",  
          "webdriver.gecko.driver" : "",  
          "webdriver.edge.driver" : ""  
        }  
      },  
      "test_settings" : {  
        "default" : {  
          "launch_url" : "http://localhost",  
          "selenium_port"  : 4444,  
          "selenium_host"  : "localhost",  
          "silent": true,  
          "screenshots" : {  
            "enabled" : false,  
            "path" : ""  
          },  
          "desiredCapabilities": {  
            "browserName": "chrome",  
            "marionette": true  
          }  
        },  
        "chrome" : {  
          "desiredCapabilities": {  
            "browserName": "chrome"  
          }  
        },  
        "edge" : {  
          "desiredCapabilities": {  
            "browserName": "MicrosoftEdge"  
          }  
        }  
      }  
    }  
  
5. testsディレクトリ内にテストコードを作成  
`/tests/demoGoogle.js`  
    module.exports = {  
      'Demo test Google': function(browser){  
        browser  
        .url('http://www.google.com')  
        .waitForElementVisible('body', 1000)  
        .setValue('input[type=text]', 'nightwatch')  
        .waitForElementVisible('button[name=btnG]', 1000)  
        .click('button[name=btnG]')  
        .pause(1000)  
        .assert.containsText('#main', 'Night Watch')  
        .end();  
      }  
    };  
  
6. `npm run nightwatch`を実行すると、ブラウザが立ち上がり、上記シナリオを実行・結果がコンソールに表示される。  
  
参考)  
[https://www.webprofessional.jp/javascript-functional-testing-nightwatch-js/](https://www.webprofessional.jp/javascript-functional-testing-nightwatch-js/)  
[http://blog.mmmcorp.co.jp/blog/2015/09/24/use-nightwatch/](http://blog.mmmcorp.co.jp/blog/2015/09/24/use-nightwatch/)  
[https://liginc.co.jp/198683](https://liginc.co.jp/198683)  
  
  
# リグレッション(回帰)テスト  

## - PhantomCSSによるビジュアルリグレッションテスト  
ページを開いて、特定のブロックが希望通りの見た目になっているかをチェックするテスト。  
ヘッドレスブラウザを立ち上げ、基準となる見た目をスクリーンショットで画像保存。スタイル修正後、PhantomCSSを実行しスクリーンショットを取得、オリジナル画像と比較して相違点なければテストをパスしたことになる。 
PhantomCSSやSlimerJSと相互作用する[CasperJS](https://github.com/casperjs/casperjs)、ヘッドレスブラウザの[PhantomJS](http://phantomjs.org/)・[SlimerJS](https://slimerjs.org/)、イメージ比較するライブラリ[Resemble.js](http://huddle.github.io/Resemble.js/)で構成される。  
  
設定手順:  
1. 比較するhtmlファイルを作成する。  
  
2. PhantomCSSをインストールする。  
`yarn add phantomcss casperjs phantomjs-prebuilt --dev`  
  
3. テストスイートを作成する。  
`/scripts/test.js`  
    var phantomcss = require('phantomcss');

    // start a casper test
    casper.test.begin('Tags', function(test){

      phantomcss.init({
        rebase: casper.cli.get('rebase')
      });

      // open page
      casper.start('http://localhost:3000/');

      // set your preferred view port size
      casper.viewport(1024, 768);

      casper.then(function(){
        // take the screenshot of the whole body element and save it under 'body.png'. The first parameter is actually a CSS selector
        phantomcss.screenshot('body', 'body');
      });

      casper.then(function now_check_the_screenshots(){
        // compare screenshots
        phantomcss.compareAll();
      });

      // run tests
      casper.run(function(){
        console.log('\nTHE END.');
        casper.test.done();
      });
    });
  
4. npm scriptsに以下を追加。  
`"phantomcss": "casperjs test ./scripts/test.js"`  
  
5. `npm run phantomcss`を実行すると、初めての場合基準となるスクリーンショットが`screenshots`ディレクトリ内に格納される。  
  
6. スタイルを編集して再度5.のコマンドを実行すると、スクリーンショットを比較し相違点を`failures`ディレクトリに格納される。  
変更箇所がハイライトとして表示される。  
  
7. 変更点を許可する場合は、`-- --rebase`引数を追加したコマンドを実行すると、新しく基準となる。  
`npm run phantomcss -- --rebase`  

  
参考)  
[https://www.webprofessional.jp/visual-regression-testing-with-phantomcss/](https://www.webprofessional.jp/visual-regression-testing-with-phantomcss/)  
  
# 納品管理  
  
## - 圧縮したJavascriptの差分チェック方法(js-beautify)  
  
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
  



