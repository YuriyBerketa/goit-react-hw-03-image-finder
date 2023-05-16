import './Button.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className="Button-load" onClick={onClick}>
      Load more
    </button>
  );
};



Button.propTypes = {
  onClick: PropTypes.func,
};