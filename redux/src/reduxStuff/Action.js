export const addCake=(cake)=>{
    return{
        type: "ADD_CAKE",
        payload:cake
    }
}

export const removeCake=(cakeId)=>{
    return{
        type: "REMOVE_CAKE",
        payload:cakeId
    }
}