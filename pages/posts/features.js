import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../components/styles/utils.module.css'

export default function FirstPost() {
  return (
    <div>
       <Head>
        <title>Features</title>
      </Head>
      <h1 className={utilStyles.mycolor}>Features</h1>
      <section className={utilStyles.headingMd}>
        <p>Automatically filter low quality images</p>
        <img
              src="/assets/features.png"
              className={` ${utilStyles.image}`}
            />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros lectus, mollis ut enim sed, congue sodales erat.         </p>
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
          color: white;s

        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}