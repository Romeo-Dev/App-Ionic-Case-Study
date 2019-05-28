export class Postmodel {

    name: string;
    weaponType: string;
    damageType: string;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
