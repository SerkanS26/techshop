import path from "path";
import multer from "multer";
import express from "express";
const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); // uploads folder in the root directory of the project
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

// Multer middleware
const upload = multer({
  storage,
});

// Upload a single image
router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded",
    image: `/${req.file.path}`,
  });
});

export default router;
