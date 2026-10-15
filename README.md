# Microservicio Web: Catálogo de Autos

Microservicio RESTful desarrollado con **Node.js** y **Express.js** para la consulta y gestión de un catálogo automotriz básico. Desplegado y alojado en la plataforma en la nube **Render**.

## Enlace en Producción

El servicio se encuentra operativo en internet en la siguiente URL:
- **Base URL:** [https://microservicio-catalogo-autos.onrender.com/](https://microservicio-catalogo-autos.onrender.com/)

---

## Endpoints Disponibles

| Método | Endpoint | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :---: |
| `GET` | `/` | Comprobación de operatividad del servicio (*Health Check*). | `200 OK` |
| `GET` | `/api/autos` | Retorna el catálogo completo con los 5 atributos base. | `200 OK` |
| `GET` | `/api/autos/:id` | Retorna la información de un auto según su identificador numérico. | `200 OK`, `404 Not Found` |

---

## Estructura de Datos (Esquema del Automóvil)

Cada elemento del catálogo cumple con los siguientes atributos:
* **`id`** *(Number)*: Identificador único autoincremental.
* **`marca`** *(String)*: Fabricante del vehículo (ej. Toyota, Mazda).
* **`modelo`** *(String)*: Denominación comercial (ej. Corolla, Sentra).
* **`anio`** *(Number)*: Año de fabricación.
* **`precio`** *(Number)*: Costo comercial en moneda local.
* **`color`** *(String)*: Color de la carrocería.

### Ejemplo de Respuesta JSON (`GET /api/autos/1`)
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "marca": "Toyota",
    "modelo": "Corolla",
    "anio": 2023,
    "precio": 399900,
    "color": "Blanco"
  }
}
