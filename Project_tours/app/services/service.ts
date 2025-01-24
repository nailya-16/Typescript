import { ITours } from "../models/tours";
import { getTourTemplate } from "../templates/tours";
import { openModal } from "@services/modal/modalService";


export function initToursDivElements(data: ITours[]): void {
  if (Array.isArray(data)) {
    const rootElement = document.querySelector(".main-app") as HTMLElement;
    const tourWrap = document.createElement('div');

    tourWrap.classList.add('tour-wrap');

    // Инициализация клика для модального окна
    initTourElemListener(tourWrap);

    let rootElementData = '';
    data.forEach((el: ITours, i: number) => {
      rootElementData += getTourTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;

    if (rootElement) {
      rootElement.appendChild(tourWrap);
    }
  }
}


function initTourElemListener(tourWrap: HTMLElement): void {
  tourWrap.addEventListener('click', (ev: MouseEvent) => {
    const targetItem = ev.target as HTMLElement;
    const parentItem = targetItem?.parentNode as HTMLElement;
    let realTarget: HTMLElement | null = null;

    if (targetItem.hasAttribute('data-tour-item-index')) {
      realTarget = targetItem;
    } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
      realTarget = parentItem;
    }

    if (realTarget) {
      const dataIndex = realTarget.getAttribute('data-tour-item-index');
      if (dataIndex) {
        openModal('order', Number(dataIndex));
      }
    }
  });
}
