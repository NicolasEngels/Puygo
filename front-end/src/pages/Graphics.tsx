import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import HappinessFormModal from "../components/HappinesFormModal";

export const Graphics = () => {
    const { user } = useAuth0()

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div id="graphics">
            <h1>Graphics of {user?.name}</h1>

            <button onClick={handleOpenModal}>Open Form</button>
            {showModal && <HappinessFormModal onClose={handleCloseModal} />}
        </div>
    );
};

export default withAuthenticationRequired(Graphics, {
    onRedirecting: () => <Loading />,
});