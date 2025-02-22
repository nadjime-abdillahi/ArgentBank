import "./account.scss";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


export const Account = ({title,amount,amountDescription}) => {

    const navigate = useNavigate();

    const erreur = () => {
        navigate("Error404");
    }

    return (
        <section className="account">
            <div className="account__content-wrapper">
                <h3 className="account__title">{title}</h3>
                <h1 className="account__amount">{amount}</h1>
                <p className="account__amount-description">{amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="button account__transaction-button" onClick={erreur}>View transactions</button>
            </div>
        </section>
    );
};

Account.propTypes = {
    title: PropTypes.string.isRequired,     // 'title' must be a string and is required
    amount: PropTypes.string.isRequired,      // 'icon' must be a string and is required
    amountDescription: PropTypes.string.isRequired,   // 'iconAlt' must be a string and is required
};