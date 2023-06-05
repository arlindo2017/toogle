import React from "react";

const DeleteAccount = () => {
    return (
        <div>
            <h1 className="card-title">Delete Account</h1>
            <p>Are you sure you want to delete your account?</p>
            {/* Open the modal using ID.showModal() method */}
            <button className="btn btn-accent" onClick={()=>window.my_modal_1.showModal()}>Delete Account</button>
            <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Please confirm</h3>
                <p className="py-4">All your information, including previous orders, will be permanently deleted.</p>
                <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Confirm</button>
                <button className="btn">Cancel</button>
                </div>
            </form>
            </dialog>
        </div>
    );
};

export default DeleteAccount;