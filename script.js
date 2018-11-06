var a = nj.arange(25).reshape(5, 5)

console.log(a.selection.data)

function ConvolutionLayer(input, filter, stride) {
    return nj.convolve(input, filter)
}

function reLU(input, stride = 2) {
    let tempMatrix
    let resultMatrix

}