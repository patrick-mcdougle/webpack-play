SomeGlobal = window.SomeGlobal || {};
SomeGlobal.D = window.SomeGlobal.D || (function() {
  console.log('D loaded.');
  function publicMethod() {
    console.log('D.publicMethod called.');
    SomeGlobal.A.publicMethod();
  }
  window.setTimeout(publicMethod, 1000);
  return {
    publicMethod: publicMethod
  }
})();
