@echo off
echo ========================================
echo SynthesiaCanvas 2.0 - Frontend Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Node.js version:
node --version
echo.

echo [INFO] npm version:
npm --version
echo.

cd frontend

echo [STEP 1] Installing dependencies...
echo This may take a few minutes...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] npm install failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation Complete! ✅
echo ========================================
echo.
echo To start the development server, run:
echo   cd frontend
echo   npm run dev
echo.
echo The app will be available at http://localhost:5173
echo.
pause
