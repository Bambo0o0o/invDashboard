import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const router = Router();

// Example case : metrics route
// router.get("/metrics", getDashboardMetrics);    // for metrics page as : http://localhost:8000/dashboard/metrics

// Home route
router.get("/", getDashboardMetrics);           // for root or Home page as : http://localhost:8000/dashboard


export default router;