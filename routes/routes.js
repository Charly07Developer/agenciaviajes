import express from 'express';
import { controllerInicio,controllerNosotros,controllerViajes,controllerTestimoniales,controllerViajeInfo } from '../controllers/paginasControllersGet.js';
import { controllerTestimonialesPost } from '../controllers/paginasControllersPost.js';

const router = express.Router();


    router.get('/', controllerInicio);
    router.get('/nosotros', controllerNosotros);
    router.get('/viajes', controllerViajes);
    router.get('/viajes/:info', controllerViajeInfo);
    router.get('/testimoniales', controllerTestimoniales);
    router.post('/testimoniales', controllerTestimonialesPost);


export default router;