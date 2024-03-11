import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AccommodationModal = ({ accommodation, onClose, selectedDates }) => {
  const { amenities, pricePerNight } = accommodation;
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotalPrice = () => {
    if (selectedDates) {
      const { start, end } = selectedDates;
      const numberOfNights = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
      const calculatedPrice = numberOfNights * pricePerNight;
      setTotalPrice(calculatedPrice);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedDates]);

  const handleReservation = () => {
    // Implementirajte logiku za rezervaciju
    // Ovdje možete pozvati API za stvaranje rezervacije ili prikazati potvrdu
    alert(`Rezervirano! Ukupna cijena: ${totalPrice} HRK`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{accommodation.title}</h2>
        <img src={accommodation.image} alt={accommodation.title} />
        <p>Kapacitet: {accommodation.capacity}</p>
        {accommodation.beachDistanceInMeters && <p>Udaljenost do plaže: {accommodation.beachDistanceInMeters}m</p>}

        <div className="amenities-content">
          <h4>Amenities:</h4>
          {Object.entries(amenities).map(([amenity, value]) => (
            <span key={amenity}>
              {amenity}: {value ? <i className="fa-solid fa-square-check"></i> : <i className="fa-solid fa-xmark"></i>} <br />
            </span>
          ))}
        </div>

        {selectedDates ? (
          <>
            <p>Ukupna cijena boravka: {totalPrice} HRK</p>
            <button onClick={handleReservation}>Rezerviraj</button>
          </>
        ) : (
          <p>Odaberite datume kako biste vidjeli cijenu i rezervirali smještaj.</p>
        )}

        <button onClick={onClose}>Zatvori</button>
      </div>
    </div>
  );
};

AccommodationModal.propTypes = {
  accommodation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    beachDistanceInMeters: PropTypes.number,
    amenities: PropTypes.object.isRequired,
    pricePerNight: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  selectedDates: PropTypes.object,
};

export default AccommodationModal;
