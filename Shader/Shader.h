//
// Created by torup on 12/6/2025.
//

#ifndef OPENGL_SHADER_H
#define OPENGL_SHADER_H
#include <fstream>
#include <iostream>
#include <ostream>
#include <sstream>
#include <string>

#include "glad/glad.h"

using namespace std;

class Shader {
public:
    unsigned int ID;
    Shader(const char* vertexPath, const char* fragmentPath) {
        string vertexCode;
        string fragmentCode;
        ifstream vShaderFile;
        ifstream fShaderFile;

        vShaderFile.exceptions(ifstream::failbit | ifstream::badbit);
        fShaderFile.exceptions(ifstream::failbit | ifstream::badbit);

        try {
            vShaderFile.open(vertexPath);
            fShaderFile.open(fragmentPath);

            stringstream vShaderStream, fShaderStream;

            vShaderStream << vShaderFile.rdbuf();
            fShaderStream << fShaderFile.rdbuf();

            vShaderFile.close();
            fShaderFile.close();

            vertexCode = vShaderStream.str();
            fragmentCode = fShaderStream.str();

        }catch (ifstream::failure& e) {
            cout << "Error in opening the file" << endl;
        }
        const char* vShaderCode = vertexCode.c_str();
        const char* fShaderCode = fragmentCode.c_str();

        unsigned int vertex, fragment;

        vertex = glCreateShader(GL_VERTEX_SHADER);
        glShaderSource(vertex,  1, &vShaderCode, NULL);
        glCompileShader(vertex);
        checkCompileErrors(vertex, "VERTEX");

        fragment =glCreateShader(GL_FRAGMENT_SHADER);
        glShaderSource(fragment, 1, &fShaderCode, NULL);
        glCompileShader(fragment);
        checkCompileErrors(fragment, "FRAGMENT");

        ID = glCreateProgram();
        glAttachShader(ID, vertex);
        glAttachShader(ID, fragment);
        glLinkProgram(ID);
        checkCompileErrors(ID, "PROGRAM");

        glDeleteShader(vertex);
        glDeleteShader(fragment);
    }

    void use() {
        glUseProgram(ID);
    }

    void setBool(const string& name, bool value) const {
        glUniform1f(glGetUniformLocation(ID, name.c_str()), (int)value);
    }
    void setInt(const string& name, int value) const {
        glUniform1f(glGetUniformLocation(ID, name.c_str()), value);
    }
    void setFloat(const string& name, float value) const {
        glUniform1f(glGetUniformLocation(ID, name.c_str()), value);
    }

    void setFloat(const string& name, float value1, float value2) const {
        glUniform2f(glGetUniformLocation(ID, name.c_str()), value1, value2);
    }

private:
    // utility function for checking shader compilation/linking errors.
    // ------------------------------------------------------------------------
    void checkCompileErrors(unsigned int shader, std::string type)
    {
        int success;
        char infoLog[1024];
        if (type != "PROGRAM")
        {
            glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
            if (!success)
            {
                glGetShaderInfoLog(shader, 1024, NULL, infoLog);
                std::cout << "ERROR::SHADER_COMPILATION_ERROR of type: " << type << "\n" << infoLog << "\n -- --------------------------------------------------- -- " << std::endl;
            }
        }
        else
        {
            glGetProgramiv(shader, GL_LINK_STATUS, &success);
            if (!success)
            {
                glGetProgramInfoLog(shader, 1024, NULL, infoLog);
                std::cout << "ERROR::PROGRAM_LINKING_ERROR of type: " << type << "\n" << infoLog << "\n -- --------------------------------------------------- -- " << std::endl;
            }
        }
    }
};



#endif //OPENGL_SHADER_H