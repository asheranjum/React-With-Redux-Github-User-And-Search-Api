import React, { useState } from "react";
import UserInfoModal from '../Modal/UserInfoModal';

const Item = ({ user }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleHideModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="col-md-3 mb-4" key={user.id}>
                <div className="card">
                    <img src={user.avatar_url} className="card-img-top" alt={`${user.login} avatar`} />
                    <div className="card-body">
                        <h5  onClick={handleOpenModal} style={{cursor:'pointer'}} className="card-title mb-3">{user.login}</h5>
                        <a href={user.html_url} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
            <UserInfoModal show={isModalOpen} onHide={handleHideModal} user={user} />
        </>
    );
};

export default Item;