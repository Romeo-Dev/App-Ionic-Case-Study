import {AttackModel} from './attack.model';

export class Postmodel {

    name: string;
    weaponType: string;
    damageType: string;
    attack: AttackModel;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
