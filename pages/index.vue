<template lang="pug">
  v-layout(
    column
    justify-center
  )
      AppBar(
        @onMenu="onMenu"
      )
      v-img(
        :src="$vuetify.breakpoint.smAndDown ? '/images/top-sp.jpg' : '/images/top.jpg'"
        width="100%"
        max-width="1200"
        style="margin:auto;"
      )
      Section#whats(color="white")
        Title(src="神戸プログラミングアカデミーとは？")
        SubTitle(src="無料のプログラミング学校＆コミュニティ")
        Article(
          text="神戸プログラミングアカデミー（以下神プ）は、以下の方を対象とした、プログラマーを育成するための無料の学校＆学習コミュニティです。ITの現場に求められている技術や思考を学ぶことで、神戸の街から日本へ、世界へと活躍できる真のプログラマを目指していきましょう。"
        )
        TargetCard(
          title="未経験からプログラマになる"
          description="プログラムを学びそのスキルを身につけることは、あなたの人生に大きなメリットをもたらしてくれます。神プではあなたの新しいスタートを応援します。"
          image="/images/discussion.jpg",
        )
        TargetCard(
          title="スキルアップ"
          description="神プは皆が共に勉強し成長していくためのコミュニティです。互いの得意なことを交換し合い、新たなエンジニアとしてのキャリアへ踏み出しましょう。"
          image="/images/devices.jpg",
        )
        TargetCard(
          title="副業から起業を目指す"
          description="自分で作ったサービスで食べていきたいと思ったことはありませんか？神プでは自サービスでの起業を目指したプログラマを応援します。"
          image="/images/fusen.jpg",
        )
      Section#recruit(color="yellow lighten-3")
        Title(src="募集要項")
        RecruitmentCard(
          title="1. プログラマになりたい未経験の方"
          message="神プでは以下の条件に当てはまり、面接にて適正があると判断された方に無料でプログラミングを教えます。未経験からプログラマとして新しいスタートを切りたい方は是非挑戦してみてください。"
          :requirements="['18歳〜30前半までの方(学生可)','出身高校または大学の偏差値が60以上(またはそれと同程度と認められる方)であり論理的な思考が得意な方。','1日3時間以上(昼夜問わず)に週に5日以上通える方','将来的にプログラマとして就職、または起業しようと思っている方','面談にて適正と認められる方(主にやる気)']"
        )
        v-divider()
        RecruitmentCard(
          title="2. スキルアップ・キャリアチェンジをしたい方"
          message="現在プログラマとして働いている方のキャリアチェンジの応援をします。"
          description="例)・今勤めている会社の外の状況を知りエンジニアとしてステップアップしたい！・最新のWebフロントエンドを触りたい！・スマホアプリを作れるようになりたい！・アジャイル・スクラム開発を体験してみたい！などなど。"
          :requirements="['プログラマとしての業務経験が1年以上の方(1年未満の方は上記未経験枠で応募してください)','現在の業務の技術スキルから前進したいという意欲がある方','将来的に転職、または起業しようと思っている方','面談にて適正と認められる方(主にやる気)']"
        )
        v-divider
        RecruitmentCard(
          title="3. 自らのサービスを立ち上げたい人"
          message="自らサービスを立ち上げて、いつかその収入で食べていけるようになりたい人へサービスの立ち上げ方やマーケティングのアドバイスをします。まずは副業で月10万円の売上を目指します。"
          :requirements="['プログラマとしての業務経験が3年以上の方','こんなサービス作ってみたいと妄想している、または既に実際に作っている方','面談にて適正と認められる方(主にやる気)']"
          description="※サービスの成功を保証するものではありません。"
        )
      Section#pricing(color="white")
        Title(src="料金")
        Article()
          ul.font-weight-bold
            li 学校・学習コミュニティの参加費は無料です。各自で必要な勉強資料やサーバー代等は個人負担となります。
            li 利用するコワーキングスペースの会員費が必要です。
          span.text-left.caption ※¥12,000＋税/月 詳しくは<a href="https://fabbit.co.jp/facility/kobesannomiya/" target="_blank">こちら</a>
        v-img(src="images/img_growth.png" width="100%" max-width="320" style="margin:auto;")
      Section#char(color="yellow lighten-5")
        Title(src="神戸プログラミングアカデミーの特徴")
        SpecialCard(
              title="人から学ぶ・自ら学ぶ・共に学ぶ",
              image="images/study.jpg"
              description=
              "エンジニアにとって最も重要なことは「成長しつづける」ということです。\n\
              そのためには日々常に勉強をしつづけるマインドを身につける必要があります。\n\
              神プでは、受け身の学習だけでなく、自らが学ぶ力を身につけること、\n\
              また学んだことをアウトプットすることを通し、本当にデキるプログラマを目指していきます。")
        SpecialCard(
              title="フルスタックエンジニアになる",
              image="images/program.jpg"
              description=
              "「フルスタックエンジニア」とはITに関する全般的な知識・業務ノウハウをもつ人材のことです。\n\
              なぜフルスタックエンジニアが 求められているのか？\n\
              それは視野が広く、課題解決に対してたくさんの選択肢を持つことができるからです。\n\
              幅広い知識を持っていることで、客観的に問題を捉えて、解決するための最適で最速の方法を選択することができるのが「フルスタックエンジニア」です。")
        SpecialCard(
              title="価値あるプロダクトの開発を学ぶ",
              image="images/chart.jpg"
              description=
              "新規事業開発をしてみるとことごとく失敗します。それはなぜか？\n\
              答えは簡単です。そのプロダクトに価値がないからです。\n\
              そのプロダクトは本当にユーザーに求められているのか？お金を払ってでも解決したい課題なのか？\n\
              神プではプログラミングの学習だけでなく、実際のプロダクト開発を通して、\n\
              価値のないプロダクト作ってしまうという失敗を防ぐための手法である「アジャイル開発」を学びます。")
      Section#how(color="white")
        Title(src="どうやる？")
        Article(
          text="神プは受け身の学校ではなく、各々が主体的に成長していくための学習コミュニティです。プログラマとしてのキャリアを各々が設定し、それに向かって成長していく過程を応援します。"
        )
        v-col(cols="12")
          v-stepper.mx-auto(
            vertical
            style="max-width:800px;"
          )
            template(
              v-for="(how, n) in howto"
            )
              v-stepper-step(
                :key="n+1"
                :step="n+1"
                editable
              ) {{how.title}}
              v-divider
              v-stepper-content(
                :key="`${n}-content`"
                :step="n+1"
              )
                v-card(
                ) {{how.description}}
        SubTitle(src="1ヶ月サイクル")
        v-timeline(
          :dense="$vuetify.breakpoint.smAndDown"
        )
          v-timeline-item(
            v-for="c in cycle"
            fill-dot
            :icon="c.icon"
            :right="$vuetify.breakpoint.smAndDown"
          )
            v-card
              v-card-title {{c.title}}
              v-card-text {{c.description}}

      Section#why(color="yellow lighten-5")
        Title(src="なぜ無料？")
        SubTitle(src="真のプログラマには価値がある")
        Article(text="神戸プログラミングアカデミーでは、優秀なエンジニアを育て企業に紹介することで企業側から収益を得るビジネスモデルを予定しています。しかし、一般的な無料のプログラミングスクールとは違い、売上目的の積極的な就職斡旋は行っていません。なぜならば、私達は何よりも皆さんに本当にIT業界で活躍できる人材になってもらいたいと思っているからです。我々の目的は、神戸から日本へ世界へと活躍できる、真のプログラマの育成です。運営会社である<a href=\"https://www.genit.jp\" target=\"_blank\">株式会社GENIT</a>では自社プロダクトを持っているため、小規模であれば売上度外視の学習コミュニティの運営をすることができます。みなさんは、ただひたすら優秀なプログラマになるために努力し続けてください。挑戦し続けてください。そうしたプログラマになることができたら必ず成功の道が開けることを約束します。")
        SubTitle(src="ミドル起業家支援事業 - 兵庫県")
        v-img(
          src="images/hyogo.png"
          style="margin:auto;"
          max-width="180"
        )
        Article(text="神戸プログラミングアカデミーは社会性、事業性、必要性を併せ持つ有望な社会的事業として、兵庫県より「<a href=\"https://web.hyogo-iic.ne.jp/kigyo/middle\" target=\"_blank\">平成31年度ミドル起業家支援事業</a>」の補助金採択されました。")

      Section#place(color="white")
        Title(src="実施場所・アクセス")
        SubTitle(src="fabbit 神戸三宮")
        p 〒651-0085 兵庫県神戸市中央区八幡通4丁目2-12 カサベラFRⅡビル10F
        iframe(
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.1485017378972!2d135.19599762920495!3d34.690194801489355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008fde6cccf17b%3A0xa584e9cae46f48d!2zZmFiYml056We5oi45LiJ5a6u!5e0!3m2!1sja!2sjp!4v1583308874048!5m2!1sja!2sjp"
          :width="$vuetify.breakpoint.smAndDown ? '100%' : '800'" height="500" frameborder="0" style="border:0;" allowfullscreen=""
        )

      Section#conductor(color="yellow lighten-5")
        Title(src="代表紹介")
        SubTitle(src="堀江 良")
        v-img(
          src="images/ryohorie.png"
          max-width="300"
        )
        Article(text="プロミュージシャンを志していたたが、音楽で食べていくことに挫折しプログラマとして地元の小規模ソフトハウスに就職。\
        その後、学費無料の社員養成学校「コナミスクール」からコナミデジタルエンタテインメントに入社。\
        GuitarFreaks/DrumManiaシリーズのプログラマ・チームリーダーとして従事。\
        その後、ヤフー株式会社にて画像プラットフォームの開発・運用。\
        また神戸で注目のスタートアップ企業KURASERUにてリードエンジニアとして医療・介護のシステム開発をする。\
        ヤフー時代に副業として始めたスマホアプリの収益が軌道にのり、2019年4月に<a href=\"https://www.genit.jp\" target=\"_blank\">株式会社GENIT</a>を創業。\
        プログラム未経験〜プログラマとして就職〜大手企業への転職〜副業〜起業と、自らの経験をよりたくさんの人に伝えていくべく、\
        2020年4月に神戸プログラミングアカデミーを開設。")
        SubTitle(src="代表からのメッセージ")
        Article(text="新規事業開発をしてみると、ことごとく失敗します。それはなぜか？ 答えは簡単です。 そのプロダクトに価値がないからです。 お金を払ってでも解決したいと思うユーザーのニーズがないからです。 我々プログラマはしばしば、そんな、誰にも使われることのない価値のないプロダクトを作りあげてしまうことがあります。 何ヶ月も書けて、朝から晩まで一生懸命作ったしても、そのプログラムのソースコードはただのテキストファイルです。 神戸プログラミングアカデミーでは、フルスタックエンジニアこそ優秀なプログラマの姿だと定義していますが、その本質は「価値を生み出すことのできるプログラマ」であるということです。「今我々が作っているプロダクトは本当にお金を払ってでも解決したいと思うほどのニーズがあるのか？」ということを常に問い続け、ユーザーインタビューやプロトタイピング、実証実験を通して、価値のあるプロダクトを作ることができるエンジニアこそ我々神戸プログラミングアカデミーが排出していきたい人材です。 全ては使ってくれるユーザーから「ありがとう」と言ってもらえる価値を提供するために、神戸プログラミングアカデミーはそんな優秀なプログラマを排出していきます。")
</template>

<script>
import AppBar from '~/components/AppBar.vue'
import Article from '~/components/Article.vue'
import Recruitment from '~/components/Recruitment.vue'
import Section from '~/components/Section.vue'
import Title from '~/components/Title.vue'
import SubTitle from '~/components/SubTitle.vue'
import SpecialCard from '~/components/SpecialCard.vue'
import TargetCard from '~/components/TargetCard.vue'
import RecruitmentCard from '~/components/RecruitmentCard.vue'
import HowToCard from '~/components/HowToCard.vue'

export default {
  components: {
    AppBar,
    Article,
    Recruitment,
    Section,
    Title,
    SubTitle,
    SpecialCard,
    TargetCard,
    RecruitmentCard,
    HowToCard
  },
  data () {
    return {
      howto: [
        {
          title: '目標を決める',
          description: 'まず最初に「いつまでに何をするか」を決めましょう。3ヶ月後までにこの技術を身に着けて就職活動するぞ！等。何のために神プに参加したのかを自問自答しその目標を定めます。'
        },
        {
          title: '作るプロダクトを決める',
          description: '神プではプロダクト開発型学習＋T字型人材のフルスタックエンジニアを目指します。プログラマと一口に言ってもその種類はWeb、スマホアプリ、ゲーム、サーバー、組み込み、etc...と様々です。定めた目標に対して最適なプロダクトを設定し、その実現に対して最適な技術でプロダクト開発を進めていきます。'
        },
        {
          title: '講義の受講(未経験の方のみ)',
          description: '未経験の方は、プログラミングの基礎学習の講義を受講していただきます。まずはどんな言語でも使える基礎的な講義でプログラミングに慣れていきましょう。'
        },
        {
          title: '1on1',
          description: '1〜2週に一度、すべてのコミュニティメンバーとマンツーマンで面談をします。日々の進捗や不安に思っていることの相談をしてください。'
        },
        {
          title: '日々の努力',
          description: 'エンジニアにとって最も重要なことは「成長しつづける」マインドを持つことです。各自が自分の時間を使い学習を進めていきます。わからないことがでてきたら随時メンバーに直接またはチャットで質問することができます。'
        },
        {
          title: '目標の達成',
          description: '目標は人それぞれ「プログラマとして就職」「イケてる技術を採用している企業への転職」「起業して自分のオフィスを借りる」等。神プで学び世界へと羽ばたいて行ってください。'
        }
      ],
      cycle: [
        {
          title: '講義/1on1',
          icon: 'mdi-human-male-male',
          description: 'マンツーマンでの講義・1on1を予約することができます。各自のレベル・進捗に合わせた講義・アドバイスをします。'
        },
        {
          title: '自習',
          icon: 'mdi-pencil',
          description: '各自がコワーキングスペースにて日々の学習を重ねます。わからないことがでてきたらコミュニティ内のメンバーやコミュニティチャットで質問することができます。'
        },
        {
          title: '週1のLT会',
          icon: 'mdi-monitor-star',
          description: '週に一度、5分程度のLT(Lightning Talk)を行います。各自の進捗を発表し、コミュニティメンバー同士でフィードバックを行いお互いの成長を促進します。'
        },
        {
          title: '月1の発表会',
          icon: 'mdi-teach',
          description: '月に一度、１ヶ月の成果発表会を行います。コミュニティ内外の人との交流を通して、各自が就職や転職、資金調達のチャンスを掴んでください。'
        }
      ]
    }
  },
  methods: {
    onMenu (menu) {
      this.$vuetify.goTo(`#${menu}`, {})
    }
  }
}
</script>
<style>
.img-center {
  margin: auto;
}
</style>
