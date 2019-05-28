export class ItemModel {
    name: string;
    description: string;
    rarity: number;
    carryLimit: number;
    value: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
