import { equipementRoutes } from './EquipmentRoute';
import { termsRoutes } from './TermsRoutes';
import { resourceRoutes } from './ResourceRoutes';
import { ValidateToken } from './../middlewares/ValidateToken';
import { Router } from "express";
import { bookingRoutes } from "./BookingRoutes";
import { companyRoutes } from "./CompanyRoutes";
import { scheduleRoutes } from "./ScheduleRoutes";
import { userRoutes } from "./UserRoutes";

export const router = Router();

router.use("/user", userRoutes);

//router.use(ValidateToken);

router.use("/equipment", equipementRoutes)

router.use("/terms", termsRoutes)

router.use("/schedule", scheduleRoutes)

router.use("/resource", resourceRoutes);

router.use("/booking", bookingRoutes);

router.use("/company", companyRoutes);


