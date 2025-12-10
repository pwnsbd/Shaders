// version : sin
#version 330 core


#define PI 3.14159265359

out vec4 glFragColor;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

float plot(vec2 st, float pct)
{
    return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
}

void main(){
    vec2 spaceTime = gl_FragCoord.xy/uResolution;
    spaceTime.x = ((spaceTime.x + uTime) * PI);
    float x = spaceTime.x;
    float y;
//    y = mod(x,0.5); // return x modulo of 0.5
//    y = fract(x); // return only the fraction part of a number
    y = ceil(x);  // nearest integer that is greater than or equal to x
    //y = floor(x); // nearest integer less than or equal to x
    //y = sign(x);  // extract the sign of x
    //y = abs(x);   // return the absolute value of x
    //y = clamp(x,0.0,1.0); // constrain x to lie between 0.0 and 1.0
    //y = min(0.0,x);   // return the lesser of x and 0.0
    //y = max(0.0,x);   // return the greater of x and 0.0

    vec3 color = vec3(y);
    float pct = plot(spaceTime, y);
    color = (1.0-pct) * color  + pct * vec3(0.0, 1.0, 0.0);
    glFragColor = vec4(color, 1.0);
}

//// version : sin
//#version 330 core
//
//
//#define PI 3.14159265359
//
//out vec4 glFragColor;
//
//uniform float uTime;
//uniform vec2 uResolution;
//uniform vec2 uMouse;
//
//float plot(vec2 st, float pct)
//{
//    return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
//}
//
//void main(){
//    vec2 spaceTime = gl_FragCoord.xy/uResolution;
//    spaceTime.x = ((spaceTime.x + uTime) * PI);
//    float y = sin(spaceTime.x );
//
//    vec3 color = vec3(y);
//    float pct = plot(spaceTime, y);
//    color = (1.0-pct) * color  + pct * vec3(0.0, 1.0, 0.0);
//    glFragColor = vec4(color, 1.0);
//}

//// version : step
//#version 330 core
//
//out vec4 glFragColor;
//
//uniform float uTime;
//uniform vec2 uResolution;
//uniform vec2 uMouse;
//
//float plot(vec2 st, float pct)
//{
//    return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
//}
//
//void main(){
//    vec2 spaceTime = gl_FragCoord.xy/uResolution;
//    float y = step(0.5, spaceTime.x);
//
//    vec3 color = vec3(y);
//    float pct = plot(spaceTime, y);
//    color = (1.0-pct) * color  + pct * vec3(0.0, 1.0, 0.0);
//    glFragColor = vec4(color, 1.0);
//}



// version 2 : pow
//#version 330 core
//
//out vec4 glFragColor;
//
//uniform float uTime;
//uniform vec2 uResolution;
//uniform vec2 uMouse;
//
//float plot(vec2 st, float pct)
//{
//    return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
//}
//
//void main(){
//    vec2 spaceTime = gl_FragCoord.xy/uResolution;
//    float y = pow(spaceTime.x, 0.05);
//
//    vec3 color = vec3(y);
//    float pct = plot(spaceTime, y);
//    color = (1.0-pct) * color  + pct * vec3(0.0, 1.0, 0.0);
//    glFragColor = vec4(color, 1.0);
//}


// version 1 : linear
//#version 330 core
//
//out vec4 glFragColor;
//
//uniform float uTime;
//uniform vec2 uResolution;
//uniform vec2 uMouse;
//
//float plot(vec2 st)
//{
//    return smoothstep(0.02, 0.0, abs(st.y-st.x));
//}
//
//void main(){
//    vec2 spaceTime = gl_FragCoord.xy/uResolution;
//    float y = spaceTime.x;
//
//    vec3 color = vec3(y);
//    float pct = plot(spaceTime);
//    color = (1-pct) * color  + pct * vec3(0.0, 1.0, 0.0);
//    glFragColor = vec4(color, 1.0);
//}

