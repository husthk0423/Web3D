
import './assets/styles/style.css';
import exampleImage from './assets/images/example.png';
import circleBase from './js/circleBase';
import testGetSet  from './js/testGetSet';
import vertexShader from './shaders/vertexShader.js';
import fragmentShader from './shaders/fragmentShader.js';
import anotherShader from './shaders/subdir/anotherShader.js';

// 动态加载 src/js 目录下的所有JS文件
const requireContext = require.context('./js', false, /\.js$/);
requireContext.keys().forEach(requireContext);

const img = document.createElement('img');
img.src = exampleImage;
document.body.appendChild(img);

//测试继承、get/set
var options={
    keyWord:"11",
    ketType:0
};
var other_options={
    version:1.0
}
var circle=new circleBase(options,other_options);
console.log(circle.version);
console.log(circle.content);
console.log(testGet.fullName); 
// console.log('Vertex Shader:', vertexShader);
// console.log('Fragment Shader:', fragmentShader);
// console.log('Another Shader:', anotherShader);





