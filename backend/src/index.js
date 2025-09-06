import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../src/routes/user.route.js';
import adminRoutes from '../src/routes/admin.route.js';
import authRoutes from '../src/routes/auth.route.js';
import albumRoutes from '../src/routes/album.route.js';
import songRoutes from '../src/routes/song.route.js';
import statRoutes from '../src/routes/stat.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/users",userRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api.auth",authRoutes);
app.use("/api/songs",songRoutes);
app.use("/api/albums",albumRoutes);
app.use("/api/stats",statRoutes);


app.listen(5000,()=>{
    console.log("server is running on port "+PORT);
});