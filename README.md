# pharmacy-search-app-frontend

薬局を検索し比較検討できるアプリです。<br>

必要なエクセルファイルをインポートすることで検索することができるようになります。
（*事前にlocalhost:3000/signupからアカウント登録が必要です。）<br><br>
<div align="center">

  ![Read_me用_AdobeExpress](https://user-images.githubusercontent.com/102279858/222644426-2408183f-828e-413a-9892-c31f966448ed.gif)
</div><br>

**サイトURL:**  https://pharmacy-search-app.amegumi3.com<br>
※実在する薬局情報を使用しているため、Basic認証をかけています。アクセス時にユーザー名とパスワードが求められますので、下記のユーザー名とパスワードを入力してください。<br>
ユーザー名：guest<br>
パスワード：2c9PZMkSeJrPt3fb<br>

物価高騰が続き、今まで以上に節約に意識が向くようになりました。<br>
今までは病院から一番近くの薬局に行っていましたが、お薬代が安くすむ薬局でお薬を手にいれることができれば節約になると思い作成しました。<br><br>


# Feature
**1. キーワード周辺の薬局探し**<br>
キーワード付近の薬局を探すことができます。住所や薬局名から検索することも可能です。<br><br>
**2. お薬代の節約ができる**<br>
詳細ページで各薬局の地方厚生局への届出情報を確認することができ、
届出の合計点数が低い薬局を選択することで、お薬代を節約することができます。（* 関連通知等により表記のものと異なる可能性があるため、あくまで参考としての活用となります。）<br><br>
**ex.**<br>
下の画像ではA薬局とB薬局で93点の差があります。
窓口での負担割合を３割とした場合、B薬局を選択することで270円ほど節約になります。<br>
＜A薬局＞
![スクリーンショット 2023-03-01 21 15 10](https://user-images.githubusercontent.com/102279858/222136646-a5382c5c-2102-43e0-8a37-c696f55fdd58.png)
＜B薬局＞
![スクリーンショット 2023-03-01 21 26 35](https://user-images.githubusercontent.com/102279858/222139059-316c09e0-67ce-4622-893d-8dc5ae399f1d.png)<br><br>
**3. 通常とは違った視点でみる薬局の特徴**<br>
届出要件を基に独自で薬局の特徴を設定しました。地域医療に貢献している薬局など、通常とはちがった視点で薬局を選ぶことができます。<br><br>

# Require
このアプリを動かすためにはバックエンドを同時に起動する必要があります。[こちら](https://github.com/amegumi3/pharmacy-search-app-backend)と合わせてご利用ください。<br>
また、このアプリは3000番ポートで起動することによって、バックエンドと通信することができるようになっています。<br><br>

# Import
**ファイルのインポートについて**<br>
ファイルの登録フォームから、届出一覧表・コード内容別一覧表・届出受理医療機関名簿の計３種類のファイルをインポートする必要があります。<br><br>
**1. 届出一覧表について**<br>
  下記のファイルを添付し、インポートしてください。<br>
  [届出一覧表.xlsx](https://github.com/amegumi3/pharmacy-search-app-frontend/files/11097431/default.xlsx)<br><br>
**2. コード内容別一覧表・届出受理医療機関名簿について**<br>
* 下記のリンクからexcelファイルをダウンロードしたものをご利用ください。全都道府県のexcelファイルを取得する必要はありませんが、コード内容別一覧表と届出受理医療機関名簿はセットで必要になります。<br>
* 北海道の薬局情報を利用される場合は、excelファイルをダウンロード後、ファイル名をコード内容別知覧表の場合は「薬局」、届出受理医療機関名簿の場合は「届出受理医療機関名簿」に変更のうえインポートしてください。<br>
* 届出受理医療機関名簿は、最後にインポートしてください。届出一覧表とコード内容別医療機関一覧表の中間テーブルとしての役割をしています。
* コード内容別一覧表をインポートする際、バックエンド側でYahoo!ジオコーダーAPIを使用した通信を行います。利用回数の上限が１日５万アクセスまでとされているため、全国の薬局を登録しようとする際等は複数日に分けて対応してください（全国の薬局数は約６万件）。<br>
参考：[YOOPに関するよくある質問](https://developer.yahoo.co.jp/webapi/map/faq.html)

**excelファイルのリンク**<br>
北海道:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/hokkaido/gyomu/gyomu/hoken_kikan/code_ichiran.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/hokkaido/gyomu/gyomu/hoken_kikan/todokede_juri_ichiran.html)<br>
東北:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/tohoku/gyomu/gyomu/hoken_kikan/itiran.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/tohoku/gyomu/gyomu/hoken_kikan/documents/201805koushin.html)<br>
関東甲信越:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/kantoshinetsu/chousa/shitei.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/kantoshinetsu/chousa/kijyun.html)<br>
東海北陸:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/tokaihokuriku/newpage_00287.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/tokaihokuriku/newpage_00349.html)<br>
近畿:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/kinki/tyousa/shinkishitei.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/kinki/gyomu/gyomu/hoken_kikan/shitei_jokyo_00004.html)<br>
中国:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/chugokushikoku/chousaka/iryoukikanshitei.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/chugokushikoku/chousaka/shisetsukijunjuri.html)<br>
四国:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/shikoku/gyomu/gyomu/hoken_kikan/shitei/index.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/shikoku/gyomu/gyomu/hoken_kikan/shitei/index.html)<br>
九州:
[コード内容別医療機関一覧表](https://kouseikyoku.mhlw.go.jp/kyushu/gyomu/gyomu/hoken_kikan/index_00006.html)・
[届出受理医療機関名簿](https://kouseikyoku.mhlw.go.jp/kyushu/gyomu/gyomu/hoken_kikan/index_00007.html)


# Reference
保険医療制度の部分については、以下の資料を参考に作成しました。
* 日本薬剤師会作成、調剤報酬点数表
https://www.nichiyaku.or.jp/assets/uploads/pharmacy-info/2022/1001-list.pdf
* 調剤報酬点数表
https://www.mhlw.go.jp/content/12404000/000907836.pdf
* 令和４年度調剤報酬改定の概要
https://www.mhlw.go.jp/content/12400000/000911825.pdf
* 特掲診療料の施設基準等及びその届出に関する手続きの取扱いについて
https://www.mhlw.go.jp/content/12404000/001080631.pdf
* 平成２４年度調剤報酬改定及び薬剤関連の診療報酬改定の概要
https://www.mhlw.go.jp/bunya/iryouhoken/iryouhoken15/dl/h24_01-06-1.pdf
