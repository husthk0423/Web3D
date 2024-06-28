// Vertex shader
#if defined(WEBGL2) || defines(WEBGPU)
precision highp sampler2DArray;
#endif
precision highp float;

attribute vec3 position;


uniform mat4 u_World;
uniform mat4 u_ViewProjection;
uniform vec4 u_color;




void main(void) {
vec4 output1 = u_World * vec4(position, 1.0);
vec4 output0 = u_ViewProjection * output1;
gl_Position = output0;

}

// Fragment shader
#if defined(PREPASS)
#extension GL_EXT_draw_buffers : require
layout(location = 0) out highp vec4 glFragData[SCENE_MRT_COUNT];
highp vec4 gl_FragColor;
#endif
#if defined(WEBGL2) || defines(WEBGPU)
precision highp sampler2DArray;
#endif
precision highp float;

uniform mat4 u_World;
uniform mat4 u_ViewProjection;
uniform vec4 u_color;


#include<helperFunctions>



void main(void) {
gl_FragColor  = u_color;
#ifdef CONVERTTOLINEAR0
gl_FragColor  = toLinearSpace(gl_FragColor);
#endif
#ifdef CONVERTTOGAMMA0
gl_FragColor  = toGammaSpace(gl_FragColor);
#endif
#if defined(PREPASS)
gl_FragData[0] = gl_FragColor;
#endif

}