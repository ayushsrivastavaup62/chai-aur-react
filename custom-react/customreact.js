const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com/',
    target: '_blank', 
 },
    children: 'click me',
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);

function customRender(element, container) {
  const domElement = document.createElement(element.type) 
domElement.innerHTML = reactElement.children
domElement.setAttribute('href', reactElement.props.href)
domElement.setAttribute('target', reactElement.props.target)
  container.appendChild(domElement)}
