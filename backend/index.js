import express, { Router } from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// Simple Mail Transfer Protocol (SMTP) transporter
let transporter = nodemailer.createTransport(transport[, defaults]);

