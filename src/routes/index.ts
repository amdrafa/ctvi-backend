import { monitoringRoute } from './MonitoringRoutes';
import { equipementRoutes } from './EquipmentRoute';
import { termsRoutes } from './TermsRoutes';
import { resourceRoutes } from './ResourceRoutes';
import { ValidateToken } from './../middlewares/ValidateToken';
import { Router } from "express";
import { bookingRoutes } from "./BookingRoutes";
import { companyRoutes } from "./CompanyRoutes";
import { scheduleRoutes } from "./ScheduleRoutes";
import { userRoutes } from "./UserRoutes";
import { certificateRoutes } from './CertificateRoute';
import { inviteRoutes } from './InviteRoutes';

export const router = Router();

router.use("/user", userRoutes);
//router.use(ValidateToken);
router.use('/monitoring', monitoringRoute)
router.use("/equipment", equipementRoutes)
router.use("/terms", termsRoutes)
router.use("/schedule", scheduleRoutes)
router.use("/resource", resourceRoutes);
router.use("/booking", bookingRoutes);
router.use("/company", companyRoutes);
router.use("/certificate", certificateRoutes);
router.use("/invite", inviteRoutes);


