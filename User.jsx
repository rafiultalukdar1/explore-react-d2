import { use } from "react"

function User({fetchUsers}) {

    const user = use(fetchUsers);
    console.log(user)

    return(
        <>
           <h2 className="py-[10px] text-[24px]">User: {user.length}</h2>
        </>
    )
}

export default User