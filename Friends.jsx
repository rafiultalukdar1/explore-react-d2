
import { use } from "react"
import Friend from "./Friend"

function Friends({friendsPromise}) {

    const friends = use(friendsPromise)

    return(
        <>
            <h2 className="py-[10px] text-[24px]">Friends: {friends.length}</h2>
            {
                friends.map(fnd => <Friend key={fnd.id} fnd={fnd}></Friend>)
            }
        </>
    )
}

export default Friends