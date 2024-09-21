"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = exports.uploadVideo = void 0;
const video_1 = __importDefault(require("../models/video"));
const uploadVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, link, thumbnail } = req.body;
    try {
        const newVideo = new video_1.default({ title, link, thumbnail });
        yield newVideo.save();
        res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
    }
    catch (error) {
        res.status(500).json({ message: 'Error uploading video', error });
    }
});
exports.uploadVideo = uploadVideo;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield video_1.default.find();
        res.status(200).json(videos);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving videos', error });
    }
});
exports.getVideos = getVideos;
