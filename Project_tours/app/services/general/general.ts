
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
export function initHeaderTitle(ticketName: string, selector: string): void {
    const headerElement= document.querySelector('header');
    if (headerElement) {
        const targetItem = headerElement.querySelector<HTMLElement>(selector);
        if (targetItem) {
            targetItem.innerText = ticketName;
        }
    }
}

export function initFooterTitle(ticketName: string, selector: string): void {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        const targetItem = footerElement.querySelector<HTMLElement>(selector);
        if (targetItem) {
            targetItem.innerText = ticketName;
        }
    }
}