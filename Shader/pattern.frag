#version 330 core

out vec4 glFragColor;

uniform float uTime;
uniform vec2 uResolution;

vec2 tile(vec2 _st, float timed)
{
    _st *= timed;
    _st.x += step(1.0, mod(_st.y,2.0)) * 0.5;
    return fract(_st);
}

float box(vec2 st, vec2 _size)
{
    _size = vec2(0.5)-_size*0.5;
    vec2 dir = smoothstep(_size, _size+vec2(0.0001), st);
    dir *= smoothstep(_size, _size+vec2(0.0001), vec2(1.) - st);
    return dir.x*dir.y;
}

mat2 rotate(float angle)
{
    return mat2(cos(angle), -sin(angle), sin(angle),
    cos(angle));
}

void main() {
    vec2 st = gl_FragCoord.xy/uResolution;
//    st -= vec2(0.5);
//    st *= rotate(1.0);
    st = tile(st, 9.);

//    vec2 tileId = floor(st);

    // check if the tile is odd or even
//    float  checker1 = mod(st.y+st.x, 2.0) < 1. ? 0.0 : 1.0;
//    float checker1 = mod(st.x + st.y, 2.0);

    float s = sin(uTime);
    if(s < 0.5)
    {
        st.x += s *.2;
    }
    else
    {
        st.y += s*.2;
    }
    float checker1 = box(st, vec2(0.5));
    vec3 color = vec3(checker1);
    glFragColor = vec4(color, 0.0);
}