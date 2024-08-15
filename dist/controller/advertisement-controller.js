import express from "express";
export const controller = express.Router();
controller.get('/', getAllAdvertisements);
controller.post('/', postAdvertisement);
controller.delete('/', deleteAdvertisement);
function getAllAdvertisements(req, res) {
    console.log("Get all Advertisements");
}
function postAdvertisement(req, res) {
    console.log("Post Advertisement");
}
function deleteAdvertisement(req, res) {
    console.log("Delete Advertisement");
}
//# sourceMappingURL=advertisement-controller.js.map