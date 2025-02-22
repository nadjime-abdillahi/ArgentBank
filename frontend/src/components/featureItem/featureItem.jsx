import PropTypes from 'prop-types';  // Import PropTypes
import "./featureItem.scss";

export const FeatureItem = ({ icon, iconAlt, title, content }) => (
    <div className="feature-item">
        <img src={`/icons/${icon}`} alt={iconAlt} className="feature-item__icon" />
        <h3 className="feature-item__title">{title}</h3>
        <p>{content}</p>
    </div>
);

// Prop validation
FeatureItem.propTypes = {
    title: PropTypes.string.isRequired,     // 'title' must be a string and is required
    icon: PropTypes.string.isRequired,      // 'icon' must be a string and is required
    iconAlt: PropTypes.string.isRequired,   // 'iconAlt' must be a string and is required
    content: PropTypes.string.isRequired,   // 'content' must be a string and is required
};