import { Head, useForm } from "@inertiajs/react"

export default function Create() {

    const { data, setData, post, errors, processing } = useForm({
        body: "",
    })

    const submit = (e) => {
        e.preventDefault()
        post('/posts')
    }
    return (
        
        <div className="w-1/2 mx-auto">
            <Head title="Create"/>
            <h2 className="text-4xl font-bold text-center mb-2">Create a new post</h2>
            <div className="flex flex-col">
                <form onSubmit={submit}>
                    <textarea className={`w-full p-2 text-lg shadow rounded-md border-0 ring-2 ring-slate-300 ${errors.body && '!ring-pink-500'}`} rows={8} value={data.body} onChange={(e) => setData('body', e.target.value)}>
                    </textarea>
                    {errors.body && <p className="text-sm text-pink-500">{errors.body}</p>}
                    <button className="bg-blue-500 p-2 text-white font-bold w-full rounded-md mt-2 hover:brightness-75 disabled:cursor-not-allowed" disabled={processing}>Create post</button>
                </form>
            </div>
        </div>
    )
}