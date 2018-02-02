/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  LazyImg as LazyImg
} from './components/lazy-img/lazy-img';

declare global {
  interface HTMLLazyImgElement extends LazyImg, HTMLElement {
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-img": JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}


import {
  WebPhotoFilterComponent as WebPhotoFilter
} from './components/web-photo-filter/web-photo-filter';

declare global {
  interface HTMLWebPhotoFilterElement extends WebPhotoFilter, HTMLElement {
  }
  var HTMLWebPhotoFilterElement: {
    prototype: HTMLWebPhotoFilterElement;
    new (): HTMLWebPhotoFilterElement;
  };
  interface HTMLElementTagNameMap {
    "web-photo-filter": HTMLWebPhotoFilterElement;
  }
  interface ElementTagNameMap {
    "web-photo-filter": HTMLWebPhotoFilterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "web-photo-filter": JSXElements.WebPhotoFilterAttributes;
    }
  }
  namespace JSXElements {
    export interface WebPhotoFilterAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
