import { createElement, Pencil } from "lucide";

// Convierte un icono de lucide en SVG listo para insertar en HTML string.
const iconSVG = (icon, attrs = {}) => createElement(icon, attrs).outerHTML;

// Renderiza una tarjeta de ticket para la vista de tecnico.
export function ticketTechCard(ticket) {
    return `<article class="ticket-card">
            <header class="card-header">
                <span class="tag tag-red">Technician: ${ticket.workspace}</span>
                <span class="priority priority-urgent">${ticket.reason}</span>
            </header>

            <h3 class="card-title">${ticket.startHour}</h3>
            <p class="card-cat">${ticket.endHour}</p>

            <footer class="card-footer">
            <address class="requester">
                
                <p>
                <strong class="req-name">${ticket.status}</strong>
                </p>
            </address>
            <div class="action-btns">
                ${editButton}
                <span class="ticket-id">tk${ticket.id}</span>
            </div>
            </footer>
     </article>`
}
