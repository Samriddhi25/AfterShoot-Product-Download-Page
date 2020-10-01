import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../components/styles/utils.module.css'

export default function FirstPost() {
  return (
    <div>
      <h1 className={utilStyles.mycolor}>Pricing</h1>
      <h3>Comming Soon</h3>
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

        h3 {
          color: white;s

        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}