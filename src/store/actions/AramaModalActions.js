export const SHOW_ARAMA_MODAL = "SHOW_ARAMA_MODAL"
export const HIDE_ARAMA_MODAL = "HIDE_ARAMA_MODAL"

export function showAramaModal(){
    return{
        type: SHOW_ARAMA_MODAL
    }
}

export function hideAramaModal(){
    return{
        type: HIDE_ARAMA_MODAL
    }
}