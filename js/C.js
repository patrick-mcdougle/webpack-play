SomeGlobal = window.SomeGlobal || {};
SomeGlobal.C = window.SomeGlobal.C || (function() {
  console.log('C loaded.');
  function publicMethod() {
    console.log('C.publicMethod called.');
    SomeGlobal.A.publicMethod();
  }
  window.setTimeout(publicMethod, 1000);
  return {
    publicMethod: publicMethod
  }
})();
