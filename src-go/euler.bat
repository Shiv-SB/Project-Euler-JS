@echo off
REM This script runs a specific Project Euler problem solution

IF "%1"=="" (
    echo Usage: run_problem.bat [problem_number]
    exit /b 1
)

REM Set the problem number variable
SET PROBLEM_NUMBER=%1

REM Run the Go program with the corresponding problem file
go run ./src/main.go ./src/Problem%PROBLEM_NUMBER%.go %PROBLEM_NUMBER%
