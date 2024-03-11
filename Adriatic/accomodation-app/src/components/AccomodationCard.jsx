import { useState } from "react";
import PropTypes from "prop-types";
import AccommodationModal from "./AccomodationModal";

const AccommodationCard = ({ accommodation }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="accomodation-list">
        <div className="accommodation-card" onClick={openModal}>
          <img src={accommodation.image} alt={accommodation.title} />
          <div className="details">
            <h2>{accommodation.title}</h2>
            <p>Kapacitet: {accommodation.capacity}</p>
            {accommodation.beachDistanceInMeters && <p>Udaljenost do plaže: {accommodation.beachDistanceInMeters}m</p>}
          </div>
          <button className="detailsButton">Prikaži detalje</button>
        </div>
      </div>
      {isModalOpen && <AccommodationModal accommodation={accommodation} onClose={closeModal} />}
    </>
  );
};

AccommodationCard.propTypes = {
  accommodation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    beachDistanceInMeters: PropTypes.number,
  }).isRequired,
};

export default AccommodationCard;
