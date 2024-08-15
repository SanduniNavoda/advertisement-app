export class AdvertisementTo {

    constructor(public id: number,
                public title: string,
                public description: string,
                public postedDate: string,
                public userEmail: string,
                public images: Array<String>) {
    }
}