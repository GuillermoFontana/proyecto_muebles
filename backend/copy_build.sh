#!/bin/bash

# Ruta al frontend/dist desde backend/
FRONTEND_DIST="../frontend/dist"
STATIC_DIR="./static"
TEMPLATES_DIR="./templates"

# Asegurar que las carpetas existan
mkdir -p "$STATIC_DIR/assets"
mkdir -p "$TEMPLATES_DIR"

# Limpiar assets antiguos
rm -rf "$STATIC_DIR/assets"/*
echo "🧹 Assets anteriores eliminados."

# Copiar index.html a templates
cp "$FRONTEND_DIST/index.html" "$TEMPLATES_DIR/"
echo "📄 index.html copiado a templates."

# Copiar assets nuevos a static/assets
cp -r "$FRONTEND_DIST/assets/"* "$STATIC_DIR/assets/"
echo "📁 Assets copiados a static/assets."

echo "✅ Build copiado con éxito."