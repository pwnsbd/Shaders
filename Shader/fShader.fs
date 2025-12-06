#version 330 core

out vec4 glFragColor;

uniform float uTime;
uniform vec2  uResolution;
uniform vec2 uMouse;

void main()
{
    vec2 st = gl_FragCoord.xy/uResolution;
    vec2 mouseUV = uMouse/uResolution;
    glFragColor = vec4(st.x, st.y, 0.0, 1.0);
//     glFragColor = vec4(mouseUV.x / abs(sin(uTime)), mouseUV.y / abs(sin(uTime)), 0.0, 1.0);
}
