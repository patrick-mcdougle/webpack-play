SomeGlobal = window.SomeGlobal || {};
SomeGlobal.B = window.SomeGlobal.B || (function() {
  console.log('B loaded.');
  function publicMethod() {
    console.log('B.publicMethod called.');
  }
  return {
    publicMethod: publicMethod
  }
})();
