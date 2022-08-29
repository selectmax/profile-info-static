import { useState } from 'react'
import photo from "./assets/photo.png"

export default function PhotoPage(){
    return (
        <img src={photo} className="photo--icon" />
    )
}