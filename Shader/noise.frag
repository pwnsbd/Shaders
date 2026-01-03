#version 330 core

out vec4 glFragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

float rand(vec2 _st)
{
return fract(sin(dot(_st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

float noise(vec2 cells)
{
    vec2 index = floor(cells);
    vec2 frac = fract(cells);

    float a = rand(index);
    float b = rand(index + vec2(1.,0.));
    float c = rand(index + vec2(0.,1.));
    float d = rand(index + vec2(1.,1.));

    vec2 nois = smoothstep(0.,1., frac);

    return mix(a, b, nois.x) + (c-a)*nois.y* (1.0 - nois.x) + (d-b)*nois.y* (nois.x);

}

void main() {
    vec2 st = gl_FragCoord.xy/uResolution - 0.5;
    st *= 20.0;
    float d = length(st);
    vec2 cells = vec2(d*10.0);

    float n = sin(noise(cells)*uTime *10.);

    vec3 color = vec3(n);

    glFragColor = vec4(color, 1.0);

}