import viajesModel from "../models/viajesModel.js";
import testimonialesModel from "../models/testimonialesModel.js";

export const controllerInicio = async (req,res) => {
    const peticionesDB = [viajesModel.findAll({limit:3}),testimonialesModel.findAll({limit:3})]
    try{        
        const resultados = await Promise.all(peticionesDB)
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            resultadosViajes: resultados[0],
            resultadosTestimoniales: resultados[1],
        });
    }catch(error){
        console.log(error);
    };
};

export const controllerNosotros = async (req,res) => {

    res.render('nosotros',{
        pagina: 'Nosotros',
    });

};

export const controllerViajes = async (req,res) => {
    try{
        const resultadosViajes = await viajesModel.findAll();
        res.render('viajes',{
            pagina: 'Viajes',
            resultadosViajes: resultadosViajes,
        });        
    }catch(error){
        console.log(error);
    };
};

export const controllerViajeInfo = async (req,res) => {
    const {info} = req.params
    try{
        const resultadoViajeInfo = await viajesModel.findOne({where:{slug:info}})
        res.render('viajeInfo',{
            pagina: 'Viaje Info',
            resultadoViajeInfo: resultadoViajeInfo,
        })
    }catch(error){
        console.log(error);
    };
};

export const controllerTestimoniales = async (req,res) => {
    try{
        const resultadosTestimoniales = await testimonialesModel.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            resultadosTestimoniales: resultadosTestimoniales
        });        
    }catch(error){
        console.log(error);
    };
};