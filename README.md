# pharmacy-search-app-frontend

薬局を検索し比較検討できるアプリです。<br>

![Read_me用_AdobeExpress](https://user-images.githubusercontent.com/102279858/222644426-2408183f-828e-413a-9892-c31f966448ed.gif)


# Feature
**1. キーワード周辺の薬局探し**<br>
  キーワード付近の薬局を見つけることができます。薬局名から検索することも可能です。
<br>
<br>
**2. お薬代の節約ができる**<br>
詳細ページで、各薬局の地方厚生局への届出情報を確認することができます。
届出の合計点数が低い薬局を選択することで、お薬代を節約することができます。（* 届出不要で算定できる施設基準等も一部存在するため、厳密な比較をすることはできません。あくまで参考としての活用になります。）
<br>
**ex.**<br>
A薬局とB薬局では93点の差があります。
窓口での負担割合を３割とした場合、B薬局を選択することで270円ほど節約になります。
<br>
＜A薬局＞
![スクリーンショット 2023-03-01 21 15 10](https://user-images.githubusercontent.com/102279858/222136646-a5382c5c-2102-43e0-8a37-c696f55fdd58.png)
＜B薬局＞
![スクリーンショット 2023-03-01 21 26 35](https://user-images.githubusercontent.com/102279858/222139059-316c09e0-67ce-4622-893d-8dc5ae399f1d.png)
<br>
<br>
**3. 通常とは違った視点でみる薬局の特徴**
<br>
地域医療に貢献している薬局など、通常とはちがった視点で薬局を選ぶことができます。（特徴は、届出要件を基に独自に設定しています。）
<br>
<br>
# Require

このアプリを動かすためには、バックエンドを同時に起動する必要があります。[こちら](https://github.com/amegumi3/pharmacy-search-app-backend)も同時に利用してください。

# Note
保険医療制度の部分については、Referenceに記載するサイトを参考に作成していますが、細かい内容に誤りがある場合があります。
<br>

# Reference

* 日本薬剤師会作成、調剤報酬点数表
https://www.nichiyaku.or.jp/assets/uploads/pharmacy-info/2022/1001-list.pdf
* 調剤報酬点数表
https://www.mhlw.go.jp/content/12404000/000907836.pdf
* 令和４年度調剤報酬改定の概要
https://www.mhlw.go.jp/content/12400000/000911825.pdf
* 特掲診療料の施設基準等及びその届出に関する手続きの取扱いについて
https://www.mhlw.go.jp/content/12404000/000984052.pdf
* 平成２４年度調剤報酬改定及び薬剤関連の診療報酬改定の概要
https://www.mhlw.go.jp/bunya/iryouhoken/iryouhoken15/dl/h24_01-06-1.pdf