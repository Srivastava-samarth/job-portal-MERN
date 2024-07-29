import express from 'express'
import isAuthenticated from '../middleware/isAuthenticated.js'
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/jobController.js';

const router = express.Router();

router.route("/post").post(isAuthenticated,postJob)
router.route("/get").get(isAuthenticated,getAllJobs)
router.route("/get/:id").get(isAuthenticated,getJobById)
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs)

export default router;