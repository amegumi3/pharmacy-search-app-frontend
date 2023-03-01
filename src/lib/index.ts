import { FirstStepImage } from "components/molecules/images/aboutApp/FirstStepImage";
import { FourthStepImage } from "components/molecules/images/aboutApp/FourthStepImage";
import { SecoundStepImage } from "components/molecules/images/aboutApp/SecooundStepImage";
import { ThirdStepImage } from "components/molecules/images/aboutApp/ThirdStepImage";

export const PrologueLists = [
{
  title: "近くの薬局を探してみよう",
  text: "近くのスポットを入力することで、その周辺にある薬局を探すことができます。",
  image:  FirstStepImage 
},
{
  title: "薬局の届出状況を確認してみよう",
  text: "薬局で支払うお薬代は、薬剤料、特定保険医療材料、調剤技術料、薬学管理料の４つの要素から構成されます。\nその中でも薬学管理料と調剤技術料は、施設基準の届出状況の有無等に応じて点数に差が生じるため、薬局ごとに支払う金額が異なります。\n詳細ページから薬局がどの届出をしているのか確認してみましょう。",
  image:  SecoundStepImage 
},
{
  title: "他の薬局と点数を比べてみよう",
  text: ` 届出している基準の合計点が低い薬局の方がお薬代が安くなることが予想されます。\n調剤基本料に丸がついていない項目は、処方箋の内容によって算定される可能性があるものです。\n算定されるケースを参照しつつ、特段の事情がなければ、マルがついている項目の合計点で比較してみてください。`,
  image:  ThirdStepImage 
},
{
  title: "薬局の特徴から薬局を選んでみよう",
  text: " 届出状況に基づき、サイト独自に薬局の特徴を設定しました。\n地域医療に貢献している薬局を選ぶなど、普段とは違った視点で薬局選びをすることができます。",
  image:  FourthStepImage 
},
]