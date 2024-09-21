import { Link } from "@inertiajs/react";
import { Children } from "react";

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-slate-900">
                <nav className="flex justify-between p-2 max-w-7xl mx-auto">
                    <Link className="text-white text-2xl tracking-wide  p-2 hover:brightness-50 font-bold rounded-md " href="/">Home</Link>
                    <Link className="text-white text-2xl tracking-wide  p-2 hover:brightness-50 font-bold rounded-md " href="/posts/create">Create</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}