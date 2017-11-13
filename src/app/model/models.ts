
export class ItemHeader {
    text:string
    link:string
}

export class Apartments {
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
