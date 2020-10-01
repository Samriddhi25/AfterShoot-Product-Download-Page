import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../components/styles/utils.module.css'

export default function FirstPost() {
  return (
    <div >
      <Head>
        <title>About Us</title>
      </Head>
      <h1 className={utilStyles.mycolor}>About Us</h1>
      <section className={utilStyles.headingMd}>
        <p>Automatically filter low quality images</p>
        <img
              src="/assets/desktop-view.png"
              className={`${utilStyles.image}`}
            />
        <p>
        Powered by trailblazing AI algorithms, AfterShoot automatically flags and filters low-quality images like blurred, duplicates, overexposed, underexposed, closed eyes, and more!
        </p>
      </section>
      <style jsx global>{`
        html,
        body {
          background-color: #212529;
          text-align: center;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        p {
          color: white;

        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}