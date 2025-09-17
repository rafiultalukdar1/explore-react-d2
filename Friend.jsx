function Friend({fnd}) {

    const {name, username, email, phone} = fnd;

    return(
        <>
            <div className="border border-[#CE9178] rounded-xl my-[15px] py-[12px] px-[30px]">
                <h2 className="text-[24px]">Name: {name}</h2>
                <h2 className="text-[22px] py-[2px]">Username: {username}</h2>
                <h2 className="text-[22px] py-[2px]">Email: {email}</h2>
                <h2 className="text-[22px]">Phone: {phone}</h2>
            </div>
        </>
    )
}

export default Friend