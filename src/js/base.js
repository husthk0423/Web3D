import * as THREE from 'three';
class base{
    constructor(options)
    {
        this.keyWord=options.keyWord;
        this.ketType=options.ketType;
        this.content="parent";
    }
    getType()
    {
       return "parent"
    }
}
export default base;