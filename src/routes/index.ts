import { Router } from "express";
import { bookingRoutes } from "./BookingRoutes";

export const router = Router();

router.use("/booking", bookingRoutes);
