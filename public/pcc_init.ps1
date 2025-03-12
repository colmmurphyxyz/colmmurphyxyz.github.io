# Check Python version
$PYTHON_VERSION = python --version 2>&1 | ForEach-Object { ($_ -split ' ')[1] }
$REQUIRED_VERSION = "3.10"

if ([System.Version]$PYTHON_VERSION -ge [System.Version]$REQUIRED_VERSION) {
    Write-Output "Python version is $PYTHON_VERSION, which is >= $REQUIRED_VERSION"
} else {
    Write-Output "Python version is $PYTHON_VERSION, which is < $REQUIRED_VERSION"
    exit 1
}

# Clone repository
git clone --depth=1 https://github.com/colmmurphyxyz/pseudo-code-compiler.git
Set-Location pseudo-code-compiler

# Ask about virtual environment
$create_venv = Read-Host "Do you want to create a virtual environment? [y/N]"
if ($create_venv -eq "y") {
    python -m venv .\venv
    Write-Output "Virtual environment created."
    .\venv\Scripts\Activate
    Write-Output "Virtual environment activated."
} else {
    Write-Output "Skipping virtual environment creation."
}

# Install dependencies
pip install -r requirements.txt

# Change to 'res' directory
Set-Location res

# Set script as executable and run
wsl chmod +x transpile_pc_examples.sh
wsl ./transpile_pc_examples.sh

# Deactivate virtual environment if created
Set-Location ..
if ($create_venv -eq "y") {
    deactivate
    Write-Output "Virtual environment deactivated."
}

# Install npm dependencies
Set-Location pcc/debugger/frontend
if (Get-Command npm -ErrorAction SilentlyContinue) {
    npm install
}

# Ask about VS Code extension installation
$install_ext = Read-Host "Do you want to install the VScode extension for CLRS pseudocode? [Y/n]"
if ($install_ext -ne "n") {
    git clone --depth=1 https://github.com/colmmurphyxyz/clrs-pseudocode-vscode.git
    Move-Item -Path clrs-pseudocode-vscode -Destination "$env:USERPROFILE\.vscode\extensions" -Force
    Remove-Item "$env:USERPROFILE\.vscode\extensions\extensions.json" -Force
} else {
    Write-Output "fine..."
}

if ($create_venv -eq "y") {
    Write-Output "Re-Activating venv"
    .\venv\Scripts\Activate
}

Write-Output "Finished"
Write-Output "The glorious Pseudocode Compiler is installed"
Write-Output "Transpile your first pseudocode program with 'python pcc/pcc.py \path\to\program.pc'"
exit 0
