"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// videoRoutes.ts
const express_1 = __importDefault(require("express"));
const videoController_1 = require("../controllers/videoController");
const router = express_1.default.Router();
router.post('/upload', videoController_1.uploadVideo);
router.get('/videos', videoController_1.getVideos);
exports.default = router;
