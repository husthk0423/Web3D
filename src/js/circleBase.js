import * as THREE from 'three';
import base from './base';
class circleBase extends base{
    constructor(parentOptions,otherOptions)
    {
        super(parentOptions);
        this.version=otherOptions.version;
    }
    getViwer()
    {
       return 0;

    }

    get engine()
    {

         
    }
    set engine(three)
    {


    }
    
}
export default circleBase