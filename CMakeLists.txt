cmake_minimum_required(VERSION 3.16)
project(OpenGL)

set(CMAKE_CXX_STANDARD 17)

# ------------------------
# GLFW (has its own CMakeLists.txt)
# ------------------------
add_subdirectory(external/glfw)

# ------------------------
# GLAD (manual library, no CMakeLists.txt inside external/glad)
# ------------------------
add_library(glad
        external/glad/src/glad.c
        Shader/Shader.h
)

target_include_directories(glad PUBLIC
        external/glad/include
)

# ------------------------
# Your executable
# ------------------------
add_executable(OpenGL
        main.cpp
)

target_link_libraries(OpenGL
        glfw
        glad
)

# Linux only: extra libs
if (UNIX AND NOT APPLE)
    target_link_libraries(OpenGL dl pthread)
endif()
