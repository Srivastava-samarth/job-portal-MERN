import express from 'express'
import isAuthenticated from '../middleware/isAuthenticated.js'
import { singleUpload } from '../middleware/multer.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/companyController.js';

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload,updateCompany);

export default router;