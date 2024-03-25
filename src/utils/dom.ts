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

export function checkDomExists({ selector }: { selector: string }) {
  const element = document.querySelector(selector);
  return element !== null
}

export function getContextText(): string | null {
  const elements = getElement({ selector: '[data-context-menu-open="true"]' }) as Element;
  if (elements === null) {
    return null;
  }

  let name: string | null = null;

  if (elements.matches('.main-trackList-selected')) {
    // Track row: get the name from div
    const trackTitle = elements.querySelector(
      '.main-trackList-rowTitle',
    );
    name = trackTitle?.textContent ?? null;
  } else if (elements.matches('.main-entityHeader-title')) {
    // Title of playlist, album, etc. from the details page header
    name = elements.textContent;
  } else {
    // Artist or album name selected from a track row
    const link = elements.matches('a[draggable]')
      ? elements
      : elements.querySelector('a[draggable]');
    name = link?.textContent ?? null;
  }
  return name;
}
