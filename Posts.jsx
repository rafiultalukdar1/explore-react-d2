import { use } from "react"
import Post from "./post"

function Posts({postsPromise}) {

    const posts = use(postsPromise)

    return(
        <>
            <h2 className="py-[10px] text-[24px]">Posts: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </>
    )
}


export default Posts