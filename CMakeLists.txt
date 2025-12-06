include(FetchContent)

# ---- GLFW ----
FetchContent_Declare(
        glfw
        GIT_REPOSITORY https://github.com/glfw/glfw.git
        GIT_TAG latest
)
FetchContent_MakeAvailable(glfw)

# ---- GLAD ----
FetchContent_Declare(
        glad
        GIT_REPOSITORY https://github.com/Dav1dde/glad.git
)
FetchContent_MakeAvailable(glad)

add_executable(OpenGLProject
        main.cpp
        src/glad.c
)

target_include_directories(OpenGLProject PRIVATE
        include
)

target_link_libraries(OpenGLProject PRIVATE
        glfw
        glad
        ${CMAKE_DL_LIBS}
)
