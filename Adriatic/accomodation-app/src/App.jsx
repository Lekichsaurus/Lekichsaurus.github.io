import { useState, useEffect } from "react";
import AccommodationCard from "./components/AccomodationCard";
import "./App.css";
import AccommodationModal from "./components/AccomodationModal";

function App() {
  const [accommodations, setAccommodations] = useState([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [selectedPeopleCount, setSelectedPeopleCount] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  useEffect(() => {
    //dohvaćanja podataka s API-ja
    fetch("https://api.adriatic.hr/test/accommodation")
      .then((response) => response.json())
      .then((data) => {
        setAccommodations(data);
        setFilteredAccommodations(data);
      });
  }, []);

  const openModal = (accommodation) => {
    setSelectedAccommodation(accommodation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const filterAccommodations = () => {
    // Implementacija logike filtriranja
    let filteredData = accommodations;

    //filtriranje po datumima
    if (arrivalDate && departureDate) {
      filteredData = filteredData.filter((accommodation) => {
        const availableDates = accommodation.availableDates.map((date) => new Date(date.intervalStart));
        return availableDates.some((date) => date >= new Date(arrivalDate) && date <= new Date(departureDate));
      });
    }

    //filtriranje po broju osoba
    if (selectedPeopleCount) {
      filteredData = filteredData.filter((accommodation) => accommodation.capacity >= selectedPeopleCount);
    }

    //filtriranje po dodatnim ponudama
    if (selectedAmenities.length > 0) {
      filteredData = filteredData.filter((accommodation) => {
        const amenities = Object.keys(accommodation.amenities);
        return selectedAmenities.every((amenity) => amenities.includes(amenity));
      });
    }

    setFilteredAccommodations(filteredData);
  };

  const resetFilters = () => {
    setArrivalDate(null);
    setDepartureDate(null);
    setSelectedPeopleCount(null);
    setSelectedAmenities([]);
    setFilteredAccommodations(accommodations);
  };

  return (
    <div className="App">
      <h1 className="header">Smještaji</h1>
      <div className="filters">
        <label>Datum dolaska:</label>
        <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} min="2024-01-01" max="2024-12-31" />

        <label>Datum odlaska:</label>
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} min="2024-01-01" max="2024-12-31" />

        <label>Broj osoba:</label>
        <input type="number" value={selectedPeopleCount} min={0} onChange={(e) => setSelectedPeopleCount(e.target.value)} />

        <label>Dodatne ponude:</label>
        <select
          multiple
          value={selectedAmenities}
          onChange={(e) => setSelectedAmenities(Array.from(e.target.selectedOptions, (option) => option.value))}>
          <option value="airConditioning">Klima</option>
          <option value="parkingSpace">Parking</option>
          <option value="pets">Ljubimci</option>
          <option value="pool">Bazen</option>
          <option value="wifi">WiFi</option>
          <option value="tv">TV</option>
        </select>

        <button onClick={filterAccommodations}>Primijeni filtere</button>
        <button onClick={resetFilters}>Resetiraj filtere</button>
      </div>

      <div className="accommodations">
        {filteredAccommodations.map((accommodation, index) => (
          <AccommodationCard key={index} accommodation={accommodation} openModal={openModal} />
        ))}
      </div>
      {isModalOpen && selectedAccommodation && <AccommodationModal accommodation={selectedAccommodation} onClose={closeModal} />}
    </div>
  );
}

export default App;
