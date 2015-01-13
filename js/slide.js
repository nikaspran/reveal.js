(function () {
  'use strict';

  var slide = Object.create(HTMLElement.prototype);

  slide.createdCallback = function () {
    var link = document.createElement('link'), self = this, root;
    link.setAttribute('rel', 'import');
    link.setAttribute('href', this.getAttribute('href'));
    link.onload = function () {
      var template = link.import.querySelector('template');
      root = self.hasAttribute('no-shadow') ? self : self.createShadowRoot();
      root.appendChild(document.importNode(template.content, true));
    };

    this.appendChild(link);
  };

  document.registerElement('x-slide', {prototype: slide, extends: 'section'});
}());