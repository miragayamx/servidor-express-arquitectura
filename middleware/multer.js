import path from 'path';
import multer from 'multer';

const __dirname = path.resolve();

const getExtension = (fileType) => fileType.split('/')[1];
const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, path.join(__dirname, './public/uploads')),
	filename: (req, file, cb) => cb(null, `${file.fieldname}-${Date.now()}.${getExtension(file.mimetype)}`)
});
const upload = multer({ storage: storage });

export default upload;