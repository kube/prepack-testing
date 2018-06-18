// This seems to only work thanks to webpack.
// Without Webpack, toUppercase could not be removed, being in global scope.

function toUppercase(str: string) {
  return str.toUpperCase()
}

console.log('Hello' + toUppercase('kube'))
