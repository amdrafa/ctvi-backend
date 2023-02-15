import { Router } from "express";
import { bookingRoutes } from "./BookingRoutes";
import { companyRoutes } from "./CompanyRoutes";
import { scheduleRoutes } from "./ScheduleRoutes";
import { userRoutes } from "./UserRoutes";

export const router = Router();

router.use("/booking", bookingRoutes);

router.use("/user", userRoutes);

router.use("/company", companyRoutes);

router.use("/schedule", scheduleRoutes);
