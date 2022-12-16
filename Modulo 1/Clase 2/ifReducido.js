const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

const DiaFree = "free"

function conseguirTipoSubcripcion(subscripcion){
    if(tiposDeSuscripciones[subscripcion]){
        return tiposDeSuscripciones[subscripcion]

    }
    console.warn("ese tipo de subcripcion no existe")
}