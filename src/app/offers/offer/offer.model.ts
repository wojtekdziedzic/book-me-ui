export class Offer {
  constructor(
    public id: number,
    public title: string,
    public description: string | null,
    public priceShort: number | null,
    public priceLong: number | null,
    public dateCreated: Date,
    public dateUpdated: Date | null,
    public active: boolean
  ) {
  }

}
