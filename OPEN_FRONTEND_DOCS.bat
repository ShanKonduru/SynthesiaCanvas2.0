@echo off
echo.
echo ========================================
echo   SynthesiaCanvas 2.0 - React UI Demo
echo ========================================
echo.
echo This will open:
echo   1. FRONTEND_COMPLETE.md - Summary document
echo   2. FRONTEND_QUICKSTART.md - Quick start guide
echo   3. frontend/README.md - Technical docs
echo.
echo Press any key to continue...
pause >nul

REM Open documentation files
start "" "FRONTEND_COMPLETE.md"
timeout /t 1 >nul
start "" "FRONTEND_QUICKSTART.md"
timeout /t 1 >nul
start "" "frontend\README.md"

echo.
echo ========================================
echo   Documentation opened!
echo ========================================
echo.
echo Next steps:
echo   1. Review the documentation
echo   2. Run: frontend_install.bat
echo   3. Run: frontend_run.bat
echo   4. Open: http://localhost:5173
echo.
echo ========================================
pause
