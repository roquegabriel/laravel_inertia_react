import { Head, useForm } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy";


export default function Edit({ post }) {

    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    })
    const route = useRoute()

    const submit = (e) => {
        e.preventDefault()
        // put(`/posts/${post.id}`)
        put(route(`posts.update`, post))
    }
    return (

        <div className="w-1/2 mx-auto">
            <Head title="Edit" />
            <h2 className="text-4xl font-bold text-center mb-2">Update post</h2>
            <div className="flex flex-col">
                <form onSubmit={submit}>
                    <textarea className={`w-full p-2 text-lg shadow rounded-md border-0 ring-2 ring-slate-300 ${errors.body && '!ring-pink-500'}`} rows={8} value={data.body} onChange={(e) => setData('body', e.target.value)}>
                    </textarea>
                    {errors.body && <p className="text-sm text-pink-500">{errors.body}</p>}
                    <button className="bg-blue-500 p-2 text-white font-bold w-full rounded-md mt-2 hover:brightness-75 disabled:cursor-not-allowed" disabled={processing}>Update post</button>
                </form>
            </div>
        </div>
    )
}