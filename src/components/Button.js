import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {

    return (
        <button
            onClick={onClick}
            style={{ color: "orange", paddingRight: "75px" , marginLeft: "50px"}}
            className="btn"
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: "pink",
};

Button.propTypes = {
    text: PropTypes.string,
   
    onClick: PropTypes.func,
};

export default Button;