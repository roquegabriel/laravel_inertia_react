import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { useState } from "react";

export default function Home({ posts }) {

    const route = useRoute()
    const { flash } = usePage().props
    const { component } = usePage()
    const [flashMessage, setFlashMessage] = useState(flash.danger || flash.success)

    setTimeout(() => {
        setFlashMessage(null)
    }, 2000)

    return (
        <>
            <Head title={component} />
            <h2 className="text-7xl text-red-500 text-center py-4 tracking-widest">Welcome, boy!</h2>

            {flashMessage && (
                <div className={`absolute top-24 right-6 ${flash.danger ? 'bg-rose-500' : 'bg-lime-500'}  p-2 text-white text-lg rounded-md`}>{flashMessage}</div>
            )}

            <div className="max-w-7xl mx-auto">
                {posts.data.map(post => (
                    <div className="p-4 border-b w-2/4 h-40 mx-auto flex flex-col justify-between" key={post.id} >
                        <div className="text-slate-500">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        {/* <Link href={`/posts/${post.id}`}>Read more...</Link> */}
                        <Link href={route('posts.show', post)} className="text-blue-500 font-semibold">Read more...</Link>
                    </div>
                ))}
            </div>
            <div className="bg-slate-900 text-white flex gap-4 justify-center py-4">

                {posts.links.map(link => (
                    link.url ?
                        <Link key={link.label} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} className={`${link.active ? 'text-blue-500 font-bold' : ''}`} />
                        :
                        <span
                            key={link.label} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} className="text-gray-500"
                        ></span>
                ))}

            </div>
        </>
    )
}