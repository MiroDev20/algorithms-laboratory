# Git

## Objetivo

Mantén un historial de Git claro, consistente y fácil de navegar.

Cada commit debe representar un único cambio lógico.

Evita mezclar modificaciones no relacionadas en el mismo commit.

---

# Conventional Commits

Utiliza siempre la especificación Conventional Commits.

Formato:

<type>(<scope>): <description>

El scope es opcional.

Ejemplos:

feat(search): implement binary search

fix(heap): handle empty input

docs(readme): improve project description

refactor(queue): simplify enqueue logic

test(stack): add edge case tests

---

# Tipos permitidos

## feat

Nueva funcionalidad.

---

## fix

Corrección de errores.

---

## docs

Cambios únicamente en documentación.

Incluye:

- README
- comentarios
- guías
- ejemplos

---

## style

Cambios que no modifican el comportamiento.

Ejemplos:

- formato
- espacios
- indentación

---

## refactor

Reestructuración del código sin cambiar su comportamiento.

---

## perf

Mejoras de rendimiento.

Utilízalo únicamente cuando exista una mejora medible o claramente justificable.

---

## test

Adición o modificación de pruebas.

---

## build

Cambios relacionados con herramientas de compilación o dependencias.

---

## ci

Cambios relacionados con integración continua.

---

## chore

Mantenimiento general del proyecto.

Ejemplos:

- configuraciones
- scripts
- actualización de herramientas

---

# Descripción

La descripción debe:

- estar en inglés
- comenzar con un verbo en imperativo
- escribirse en minúsculas
- no terminar con punto
- describir el cambio, no el archivo

Correcto:

feat(graph): implement depth-first search

Incorrecto:

feat: DFS

Incorrecto:

update files

Incorrecto:

fixed bug

---

# Scope

Cuando aporte contexto, utiliza un scope.

Ejemplos:

search

sorting

graphs

trees

dynamic-programming

docs

github

vscode

claude

templates

scripts

---

# Tamaño de los commits

Un commit debe representar una única intención.

Buenos ejemplos:

- implementar Merge Sort
- añadir pruebas para Quick Sort
- documentar Binary Search

Mal ejemplo:

- implementar Quick Sort
- modificar README
- cambiar configuraciones de VS Code
- actualizar GitHub Actions

Todo en el mismo commit.

---

# Antes de crear un commit

Verifica:

- el proyecto compila correctamente (si aplica)
- no existen archivos temporales
- no hay código comentado innecesario
- no se incluyen secretos
- los cambios pertenecen a una única intención

---

# Si el usuario solicita un commit

Cuando el usuario pida generar un mensaje de commit:

1. Analiza los cambios realizados.
2. Identifica la intención principal.
3. Selecciona el tipo adecuado.
4. Propón un mensaje siguiendo Conventional Commits.
5. Si los cambios contienen varias intenciones distintas, recomienda dividirlos en varios commits.

---

# Calidad del historial

Prioriza un historial legible antes que un historial con pocos commits.

Es preferible realizar varios commits pequeños y coherentes que uno grande con cambios mezclados.

El historial debe permitir comprender la evolución del proyecto leyendo únicamente los mensajes de commit.
