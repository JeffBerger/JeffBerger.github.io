import Link from "next/link";

export default function NavBar(){

    const links = [
        {
            title: "about",
            href: "/about"
        },
        {
            title: "research",
            href: "/research"
        },
        {
            title: "blog",
            href: "/blog"
        }
    ]
    return (
        <header className="py-6 px-6 border-amber-950/50 border-b-2">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    Berger
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-8">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
