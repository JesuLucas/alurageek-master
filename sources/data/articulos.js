import { Articulo } from "../classes/Articulo.js";

export const crearArticulos = (img, seccion) => {    
    return Array.from({ length: 6 }, (_, i) => new Articulo(
        'Producto XYZ', 
        '60', 
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Incidunt ipsam perspiciatis odio dolores nemo rem illum itaque 
        porro delectus enim temporibus, inventore, quis libero reiciendis
        illo soluta deleniti asperiores! Quod. Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit. Incidunt ipsam perspiciatis odio 
        dolores nemo rem illum itaque porro delectus enim temporibus, 
        inventore, quis libero reiciendis illo soluta deleniti asperiores! Quod.`,
        `${img}${i + 1}.png`,
        seccion
    ));
};
