import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import mainstyles from '../components/styles/mainstyles.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>AfterShoot</title>
        </Head>
        <section className={mainstyles.tophead}>
          <div className={mainstyles.websitecount}>
            <div className={mainstyles.data}>
              <text>Lorem Ipsum</text>
              <h2>XXX,XXX</h2>
            </div>
            <div className={mainstyles.data}>
              <text>Lorem Ipsum</text>
              <h2>XXX,XXX</h2>
            </div>
            <div className={mainstyles.data}>
              <text>Lorem Ipsum</text>
              <h2>XXX,XXX</h2>
            </div>
          </div>
          <div className={mainstyles.video}>
            <div className={mainstyles.mediavideo}>
              <iframe width="450" height="350" src="https://www.youtube.com/embed/GMgxRYt61gc" title="AfterShoot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={mainstyles.textvideo}>
              <h1>Hello</h1>
              <h3>Spend Time on things that matter the most</h3>
              <p>Lorem ipsum dolor sit amet Nullam eros lectus, mollis ut enim sed, congue sodales erat. Lorem ipsum dolor sit amet Nullam eros lectus, mollis ut enim sed, congue sodales erat.
            </p>
            </div>
          </div>
        </section>
        <section className={mainstyles.section2}>
          <div className={mainstyles.content}>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <h1>Everything You Needed</h1>
            <img
              src="/assets/features.png"
              className={`${mainstyles.featimage}`}
            />
            <p>You may try out our application</p>
            <p>Don't Let the <span> Duplicates</span> Slow you down</p>
          </div>
        </section>
        <section className={mainstyles.section3}>
          <div className={mainstyles.side}>
            <img
              src="/assets/sidephoto.png"
              className={`${mainstyles.sideimage}`}
            />
          </div>
          <div className={mainstyles.texts}>
            <h1>Get Started !</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros lectus, mollis ut enim sed, congue sodales erat.
                        </p>
            <button>DOWNLOAD</button>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </section>
        <section className={mainstyles.testimonials}>
          <div className={mainstyles.leftarrow}>

          </div>
          <div className={mainstyles.wrapper}>
            <div className={mainstyles.eachimage}>
              <img
                src="/assets/singleimg.png"
                className={`${mainstyles.myeachimage}`}
              />
              <p>adipiscing elit. Nullam eros lectus, mollis ut enim sed, congue sodales erat.</p>
            </div>
            <div className={mainstyles.eachimage}>
              <img
                src="/assets/singleimg.png"
                className={`${mainstyles.myeachimagee}`}
              />
              <p>dolor sit amet, consectetur adipiscing elit. Nullam eros lectus, mollis ut enim sed, congue sodales erat.</p>
            </div>
            <div className={mainstyles.eachimage}>
              <img
                src="/assets/singleimg.png"
                className={`${mainstyles.myeachimage}`}
              />
              <p> Lorem ipsum dolor sit amet, consectetur, congue sodales erat.</p>
            </div>
          </div>
          <div className={mainstyles.rightarrow}>
          </div>
        </section>
      </div>
    </Layout>
  )
}