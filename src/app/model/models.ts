
export class ItemHeader {
    text:string
    link:string
}

export class Apartments {
    id:number
    name:string
    description:string
    images:string[]
    imagesDesc:string[]
}

export class BigData {
    apartments:Apartments[]
    itemHeader:ItemHeader[]
    generic:any
}

export class Presentation {
    id:number
    title:string
    text:string
    img:string
    titleimg:string
    descimg:string
    linkimg:string
    classimg:string
    imgLeft:boolean
    imagesGallery:string[]
    imagesDesc:string[]
}
