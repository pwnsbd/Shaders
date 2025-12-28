#version 330 core

out vec4 glFragColor;

uniform vec2 uResolution;
uniform float uTime;

#define PI 3.14159265359

float random(vec2 st)
{
    return fract(sin(dot(st.xy,
        vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 truncetTile(vec2 st, float index)
{
    index = fract((index - 0.5) * 2.0);
    if(index > 0.75)
    {
        st = vec2(1.)-st;
    }else if(index > 0.5)
    {
        st = vec2(1.0-st.x, st.y);
    }else if(index > 0.25)
    {
        st = vec2(st.x, 1.0 - st.y);
    }

    return st;
}

mat2 rotate(float angle)
{
    return mat2(cos(angle), -sin(angle), sin(angle),
    cos(angle));
}

void main() {
    vec2 st = gl_FragCoord.xy/uResolution;
    st.y *= 1000.;
    st.x *= 3.0;
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);
    float randValue = random(ipos);
    vec3 color = vec3(0.0);
    if(ipos.x == 0 || ipos.x == 2)
    {
        color = vec3(step(randValue, fpos.y * (1.0 - sin(uTime))));
    }else
    {
        fpos -= 0.5;
//        fpos = rotate(45.0) * fpos;
        fpos += 0.5;
        float d = abs(fpos.y - fpos.x);
        float line = step(d, 0.05);
        color = vec3(line);
    }


    glFragColor = vec4(color, 1.0);
}


//#version 330 core
//
//out vec4 glFragColor;
//
//uniform vec2 uResolution;
//uniform float uTime;
//
//float random(vec2 st)
//{
//    return fract(sin(dot(st.xy,
//        vec2(12.9898,78.233))) * 43758.5453123);
//}
//
//vec2 truncetTile(vec2 st, float index)
//{
//    index = fract((index - 0.5) * 2.0);
//    if(index > 0.75)
//    {
//        st = vec2(1.)-st;
//    }else if(index > 0.5)
//    {
//        st = vec2(1.0-st.x, st.y);
//    }else if(index > 0.25)
//    {
//        st = vec2(st.x, 1.0 - st.y);
//    }
//
//    return st;
//}
//
//void main() {
//    vec2 st = gl_FragCoord.xy/uResolution;
//    st *= 10.;
//    vec2 ipos = floor(st);
//    vec2 fpos = fract(st);
//
//    vec2 tile = truncetTile(fpos, random(ipos));
//
//    float color = (step(length(tile),0.6) - step(length(tile),0.4) ) +
//    (step(length(tile-vec2(1.)),0.6) -
//    step(length(tile-vec2(1.)),0.4));
//    glFragColor = vec4(vec3(color), 1.0);
//}