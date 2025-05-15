import { Modal } from "./UI/Modal";
import { renderMap } from './UI/Map';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddresHandler.bind(this));
  }

  selectPlace(coordinates) {
  if (this.map) {
    // Just update the view center
    const view = this.map.getView();
    view.setCenter(fromLonLat([coordinates.lng, coordinates.lat]));
  } else {
    // Create and store the map
    this.map = renderMap(coordinates); // renderMap should return the map instance
  }
}
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Feature not available");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading Location Please wait..."
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        console.log(successResult);
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        this.selectPlace(coordinates);
      },
      (error) => {
        modal.hide();
        alert("Could not locate you, Please enter address manually");
      }
    );
  }
  findAddresHandler() {}
}

new PlaceFinder();
