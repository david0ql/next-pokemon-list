import { ReactNode } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

interface LayoutProps {
    title?: string;
    children: ReactNode;
}

const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="David Gómez" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>
            {/* Navbar */}
            <Navbar />
            <main style={{
                padding: '0 20px',
            }}>
                {children}
            </main>
        </>
    )
}

export default Layout
