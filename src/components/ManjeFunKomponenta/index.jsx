import PropTypes from "prop-types";
const ManjeFunKomponenta = ({ jasamklikizkomponente }) => {
  return (
    <div>
      <button onClick={jasamklikizkomponente}>Click me</button>
    </div>
  );
};
ManjeFunKomponenta.propTypes = {
  jasamklikizkomponente: PropTypes.func.isRequired,
};
export default ManjeFunKomponenta;
