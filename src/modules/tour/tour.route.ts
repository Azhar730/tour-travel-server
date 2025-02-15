import { Router } from 'express';
import { tourController } from './tour.controller';

const tourRouter = Router();

tourRouter.post('/create-tour', tourController.createTour);
tourRouter.get('/', tourController.getAllTour);
tourRouter.get('/:tourId', tourController.getSingleTour);
tourRouter.put('/:tourId', tourController.updateTour);
tourRouter.delete('/:tourId', tourController.deleteTour);
export default tourRouter;
