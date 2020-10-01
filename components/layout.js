import Head from 'next/head'
import styles from './layout.module.css'
import mainstyles from './styles/mainstyles.module.css'
import Link from 'next/link'


export default function Layout({ children, home }) {
    return (
        <div className={mainstyles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={mainstyles.nav}>
                <div className={mainstyles.imagess}>
                    <div className={mainstyles.navigation}>
                        <div className={mainstyles.left}>
                            <img src="https://aftershoot.co/assets/logo.png" className={`${mainstyles.image}`} />
                            <h3>After Shoot</h3>
                        </div>
                        <div className={mainstyles.right}>
                            <Link href="/posts/features">
                                <a>Features</a>
                            </Link><Link href="/posts/pricing">
                                <a>Pricing</a>
                            </Link><Link href="/posts/about">
                                <a>About</a>
                            </Link><Link href="/posts/account">
                                <a>Account</a>
                            </Link>
                        </div>
                    </div>
                    <div className={mainstyles.leftside}>
                        <h1>We Vaule Time !</h1>
                        <p>Lorem ipsum dolor sit amet Nullam eros lectus, mollis ut enim sed, congue sodales erat.
                        Nullam eros lectus, mollis ut enim sed, congue sodales erat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros lectus, mollis ut enim sed, congue sodales erat.
                        </p>
                        <button>DOWNLOAD</button>
                        <p>XXX,XXX photos selected</p>
                    </div>
                </div>
            </div>
            <main>{children}</main>
            <div className={mainstyles.footer}>
                <div className={mainstyles.social}>
                    <Link href="/posts/pricing">
                        <a>Pricing</a>
                    </Link><Link href="/posts/about">
                        <a>About</a>
                    </Link><Link href="/posts/account">
                        <a>Account</a>
                    </Link>
                </div>
                <div className={mainstyles.contact}>
                    <text>Hello@aftershoot.co</text>
                    <text>+ 91 XXXXXXXXXX</text>
                    <text>Mayur Vihar, New Delhi - 110081</text>
                </div>
                <div className={mainstyles.terms}>
                    <text>Terms and Conditions || Privacy Policy || Copyright 2020</text>
                </div>
            </div>
        </div>
    )
}