#version 330 core

out vec4 glFragColor;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uTime;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

mat2 scale(vec2 size)
{
    return mat2(size.x, 0.0, 0.0, size.y);
}

mat2 rotation(float angle)
{
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float box(vec2 st, vec2 _size)
{
    _size = vec2(0.5)-_size*0.5;
    vec2 dir = smoothstep(_size, _size+vec2(0.0001), st);
    dir *= smoothstep(_size, _size+vec2(0.0001), vec2(1.) - st);
    return dir.x*dir.y;
}

float cross(vec2 _st, float _size){
    return box(_st, vec2( _size, _size/4.0)) + box(_st, vec2(_size/4.0, _size));
}

void main()
{
    vec2 st = gl_FragCoord.xy/uResolution - vec2(0.5);
    vec3 color = vec3(0.0);

    //translate
    vec2 translate = vec2(cos(uTime), sin(uTime));
    st += translate * 0.35;

    st += rotation(uTime*PI) * st;

    st += scale(vec2(sin(uTime))) * (1/4 * PI) * st;
    
    st += vec2(0.5);


    //create a box
    float radius = distance(vec2(0.0), st.xy);
    color += vec3(cross(st, 0.25));

    glFragColor = vec4(color, 1.0);
}

//#version 330 core
//
//out vec4 glFragColor;
//
//uniform vec2 uMouse;
//uniform vec2 uResolution;
//uniform float uTime;
//
//#define PI 3.14159265359
//#define TWO_PI 6.28318530718
//
//
//void main(){
//    vec2 st = gl_FragCoord.xy/uResolution;
//
//    vec3 color = vec3(0.0);
//
//    float radius = distance(vec2(0.5), st);
////    float dis = smoothstep(0.1, 0.11, radius);
//
//    color = vec3(fract(sin(radius - uTime/2.) * 5.0) );
//
//    glFragColor = vec4(color, 1.0);
//}


//#version 330 core
//
//out vec4 glFragColor;
//
//uniform vec2 uMouse;
//uniform vec2 uResolution;
//uniform float uTime;
//
//#define PI 3.14159265359
//
//vec3 ColorA = vec3(0.9, 0.9, 0.0);
//vec3 ColorB = vec3(0.9, 0.0, 0.0);
//
//float plot(vec2 sc, float pct)
//{
//    return smoothstep(pct - 0.01, pct, sc.y) -  smoothstep(pct, pct + 0.01, sc.y);
//}
//
//
//void main(){
//    vec2 sc = gl_FragCoord.xy/uResolution;
//
//    float y = sc.x;
//
//    vec3 pct = vec3(sc.x);
//
//    pct.r = smoothstep(0.0, 1.0, sc.x);
//    pct.b = sin( PI *uTime);
//    pct.g = pow(sc.x, 5);
//
//    vec3 color = mix(ColorA, ColorB, pct);
//    color = mix(color, vec3(1.0,0.0, 0.0), pct.r);
//    color = mix(color, vec3(0.0,1.0, 0.0), pct.g);
//    color = mix(color, vec3(0.0,0.0, 1.0), pct);
//
//    glFragColor = vec4(color, 1.0);
//}


//#version 330 core
//
//out vec4 glFragColor;
//
//uniform vec2 uMouse;
//uniform vec2 uResolution;
//uniform float uTime;
//
//vec3 ColorA = vec3(0.9, 0.9, 0.0);
//vec3 ColorB = vec3(0.9, 0.0, 0.0);
//
//void main(){
//    vec2 sc = gl_FragCoord.xy/uResolution;
//
//    float pct = abs(sin(uTime));
//    vec3 color = mix(ColorA, ColorB, pct);
//
//    glFragColor = vec4(color, 1.0);
//}