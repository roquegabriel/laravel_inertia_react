import { Head, Link, useForm } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post }) {
    const { delete: destroy } = useForm()
    const route = useRoute()

    const submit = (e) => {
        e.preventDefault()
        destroy(`/posts/${post.id}`)
    }
    return (
        <>
            <Head title="Post" />
            <div className="p-4 border-b w-2/4 h-40 mx-auto flex flex-col justify-between" >
                <div className="text-sm text-slate-500">
                    <span>Posted on: </span>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="self-end inline-flex items-center gap-1">
                    <form onSubmit={submit}>
                        <button className="bg-pink-600 text-white py-2 px-4 rounded-md block">Delete</button>
                    </form>
                    <div>
                        {/* <Link href={`/posts/${post.id}/edit`} className="bg-green-600 text-white py-2 px-4 rounded-md block">Update</Link> */}
                        <Link href={route('posts.edit', post)} className="bg-green-600 text-white py-2 px-4 rounded-md block">Update</Link>
                    </div>
                </div>
            </div>
        </>
    )
}