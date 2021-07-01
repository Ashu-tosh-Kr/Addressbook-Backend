import { Router } from 'express';
import addrRoutes from './routes/addrRoutes';

export default (): Router => {
  const app = Router();
  app.get('/',(req,res)=>res.json({msg:"hello"}))
  //TODO: add routes here...
  app.use('/addr',addrRoutes)
  return app;
};
