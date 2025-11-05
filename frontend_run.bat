@echo off
echo ========================================
echo SynthesiaCanvas 2.0 - Frontend Dev Server
echo ========================================
echo.

cd frontend

echo [INFO] Starting development server...
echo.
echo The app will be available at:
echo   http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
