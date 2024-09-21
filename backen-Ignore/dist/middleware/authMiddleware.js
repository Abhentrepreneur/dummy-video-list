"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'; // Use a strong secret key
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Extract token from header
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        next(); // Proceed to the next middleware or route handler
    });
};
exports.authMiddleware = authMiddleware;
