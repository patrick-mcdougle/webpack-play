SomeGlobal = window.SomeGlobal || {};
SomeGlobal.A = window.SomeGlobal.A || (function() {
  console.log('A loaded.');
  function publicMethod() {
    console.log('A.publicMethod called.');
  }
  return {
    publicMethod: publicMethod
  }
})();
