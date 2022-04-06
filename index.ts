import express, { Application } from "express";
import 'dotenv/config';
import router from './src/routes';


const app: Application = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', router)

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}