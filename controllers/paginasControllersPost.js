import testimonialesModel from "../models/testimonialesModel.js";

export const controllerTestimonialesPost = async (req,res) => {

    const {nombre,email,mensaje} = req.body;
    let errores = [];
    if(nombre.trim() === ''){
        errores.push({mensaje:'El campo de NOMBRE es obligatorio'});
    };
    if(email.trim() === ''){
        errores.push({mensaje:'El campo de EMAIL es obligatorio'});
    };
    if(mensaje.trim() === ''){
        errores.push({mensaje:'El campo de MENSAJE es obligatorio'});
    };

    if(errores.length > 0){
        try{
            const resultadosTestimoniales = await testimonialesModel.findAll();
            res.render('testimoniales',{
                errores: errores,
                nombre: nombre,
                email: email,
                mensaje: mensaje,
                resultadosTestimoniales: resultadosTestimoniales,
            });
        }catch(error){
            console.log(error);
        };
    }else{
        await testimonialesModel.create({
            nombre: nombre,
            email: email,
            mensaje: mensaje,
        });
        res.redirect('/testimoniales');
    };
};