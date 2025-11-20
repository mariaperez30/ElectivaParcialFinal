# Análisis de Texto - Pipeline CI/CD

Este repositorio contiene una librería de utilidades de procesamiento de texto desarrollada en **Node.js**, integrando un flujo de trabajo de Integración Continua (CI) para asegurar la calidad del código.

## 1. Stack Tecnológico (Parte 1)

Se han seleccionado herramientas nativas del ecosistema JavaScript para minimizar dependencias y asegurar una ejecución rápida:

* **Lenguaje:** JavaScript (Ejecución en Node.js v16).
* **Framework de Pruebas:** `Jest`. Seleccionado por su capacidad "zero-config" que integra runner, aserciones y reporte de cobertura en una sola librería.
* **Linter:** `ESLint`. Estándar de la industria para análisis estático, configurado para detectar errores de sintaxis y mantener la consistencia del código.

### Política de Calidad (Cobertura)
Se ha configurado un **umbral de cobertura (threshold)** del **80%** dentro del archivo `package.json`.
* *Justificación:* Esto garantiza que al menos 8 de cada 10 líneas de código lógico sean ejecutadas por los tests antes de aprobar cualquier cambio, asegurando la estabilidad de las funciones principales.

## 2. Workflow de GitHub Actions (Parte 2)

El pipeline (`.github/workflows/pipeline.yml`) se activa automáticamente en eventos `push` y `pull_request`.

**Etapas del Proceso:**
1.  **Setup:** Configura el entorno de ejecución con Ubuntu y Node.js.
2.  **Install:** Ejecuta `npm install` para descargar las dependencias.
3.  **Lint:** Ejecuta `npx eslint` para validar estilo y sintaxis.
4.  **Test & Coverage:** Ejecuta `npm test`. Si la cobertura global es inferior al 80%, el proceso termina con error y bloquea el merge.

## 3. Ejecución Local (Parte 3)

El proyecto está preparado para ser validado localmente utilizando `nektos/act` y Docker.

**Comando de ejecución:**
```bash
act push