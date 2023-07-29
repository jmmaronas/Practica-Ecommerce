const selectProvincias = document.getElementById("selectProvincias")
const selectMunicipios = document.getElementById("selectMunicipios")

export const getProvincias = async () => {
    const result = await fetch("https://apis.datos.gob.ar/georef/api/provincias")
    const { provincias } = await result.json()
    for (let provincia of provincias) {
        const option = document.createElement("option")
        option.innerHTML = provincia.nombre
        option.value = provincia.id
        selectProvincias.add(option)
    }
    return provincias
}

export const pintarMunicipios = async () => {
    selectMunicipios.innerHTML = ""
    const municipios = await getMunicipios(selectProvincias.value)
    for (let municipio of municipios) {
        const option = document.createElement("option")
        option.innerHTML = municipio.nombre
        option.value = municipio.id
        selectMunicipios.add(option)
    }
}

export const getMunicipios = async (provinciaId) => {
    const result = await fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&campos=id,nombre&max=100`)
    const { municipios } = await result.json()
    ordenar(municipios)
    return municipios
}

const ordenar = (array) => {
    return array.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
}