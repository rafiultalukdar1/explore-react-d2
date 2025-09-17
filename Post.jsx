function Post({post}) {

    const {title, body, id} = post;

    return(
        <>
            <div className="border border-[#CE9178] rounded-xl my-[15px] py-[12px] px-[30px]">
                <h2 className="text-[30px]">ID: {id}</h2>
                <h2 className="text-[26px]">Title: {title}</h2>
                <p className="text-[18px]">Body: {body}</p>
            </div>
        </>
    )
}


export default Post
