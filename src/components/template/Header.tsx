import Head from "next/head";

export default function Header(props) {
    return (
        <>
            <Head>
                <title>Baptista's TODO</title>
            </Head>
            <div className="flex h-1/3 bg-tasks bg-no-repeat bg-cover">
                <div className={`
                    flex flex-1 h-full justify-center items-center
                    bg-gradient-to-r 
                    from-purple-600 via-transparent to-blue-600
                `}>
                    {props.children}
                </div>
            </div>
        </>
    )
}