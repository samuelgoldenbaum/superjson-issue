export default function Layout({children}) {
    return (
        <>
            <header style={{background: "lightgrey"}}>Header</header>
            <main>{children}</main>
            <footer style={{background: "lightgrey"}}>Footer</footer>
        </>
    )
}
