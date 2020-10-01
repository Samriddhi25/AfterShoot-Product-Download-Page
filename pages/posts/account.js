import Link from 'next/link'
import Head from 'next/head'
import styles from '../../components/layout.module.css'
import utilStyles from '../../components/styles/utils.module.css'

export default function Account() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <h1 className={utilStyles.mycolor}>About Us</h1>
      <section className={utilStyles.headingMd}>
        <p>Automatically filter low quality images</p>
        <img
              src="https://www.befunky.com/images/wp/wp-2015-10-How-to-capture-and-edit-the-perfect-flat-lay-using-BeFunky-1.jpg?auto=webp&format=jpg&width=640"
              className={`${utilStyles.borderCircle} ${utilStyles.profile}`}
            />
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

//