export function getElement({ selector, isAll }: { selector: string, isAll?: boolean }) {
  let element: Element | NodeListOf<Element> | null = document.querySelector(selector);
  if (isAll)
    element = document.querySelectorAll(selector);

  if (element === null) {
    element = document.createElement('div');
  }
  return element
}

export function createElement({ className, otherAttributes }: { className: string, otherAttributes?: { [key: string]: string } }) {
  const el = document.createElement('div');
  el.setAttribute('class', className);
  if (otherAttributes) {
    Object.keys(otherAttributes).forEach((key) => {
      el.setAttribute(key, otherAttributes[key]);
    });
  }
  return el;
} 
