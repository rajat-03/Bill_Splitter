import React, { useState } from "react";

const AddFriend = ({onAddFriend}) => {

    const [name, setName] = useState('');

    function addFriend(event)
    {
        event.preventDefault();
        onAddFriend(name);
        setName(''); //to make inputbox empty again
    }
    return (
        <>
            <div>
                <form onSubmit={addFriend}>
                <h3> Add friends</h3>
                    <div>
                        <label> FriendName</label>
                        <input type="text" value={name} onChange={(e)=>{ setName(e.target.value)}}/>
                    </div>

                    <div>
                        <button className="btn">Add Friend</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default AddFriend;