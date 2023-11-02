import React, { useState } from "react";
import Button from "./Button";

const BillShare = ({ friends, onBillPaid }) => {

    const [bill, setBill] = useState('');
    const [friend, setFriend] = useState('');

    function submitBill(event)
    {
        event.preventDefault();
        const singleFriend = friends.find(fr => +friend === +fr.id);
        // console.log(singleFriend)

        const billDetails = {friendId: friend, name: singleFriend.name, bill};
        onBillPaid(billDetails);
        setBill('');
        setFriend('');
    }

    return (
        <>
            <div>
                <h3> Share bill details</h3>
                <form onSubmit={submitBill}>
                    <div>
                        <label>Selet friend who paid the bill</label>
                        <select value={friend} onChange={(e) => setFriend(e.target.value)}>
                            <option value=" ">Select Friend</option>
                            {friends.map((friend) => (
                                <option value={friend.id} key={friend.id}>{friend.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Bill Amount</label>
                        <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />
                    </div>

                    <div>
                        <Button>Add Bill </Button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default BillShare;