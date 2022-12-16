function conseguirTipoSubcripcion(subscripcion){
    if(subscripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
     }

    if(subscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
     }

    if(subscripcion == "Expert"){
         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
         return;
     }

    if(subscripcion == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
     }
     console.warn("ese tipo de subcripcion no existe")
   
}