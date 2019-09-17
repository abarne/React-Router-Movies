$_$wp(1);
function diagonalDifference(arr) {
    $_$wf(1);
    let t0 = ($_$w(1, 0), new Date().getTime());
    let sum1 = ($_$w(1, 1), Math.abs(arr.reduce((sum, arr, i) => {
        $_$wf(1);
        return $_$w(1, 2), sum += arr[i] - arr.reverse()[i];
    }, 0)));
    let t1 = ($_$w(1, 3), new Date().getTime());
    $_$w(1, 4), $_$tracer.log('Function took ' + (t1 - t0) / 1000 + ' seconds to run.', '\'Function took \' + (t1 - t0) / 1000 + \' ...', 1, 4);
    $_$w(1, 5), $_$tracer.log(sum1, 'sum1', 1, 5);
    return $_$w(1, 6), sum1;
}
var matrix = ($_$w(1, 7), []);
for (var i = 0; $_$w(1, 8), i < 10000; i++) {
    $_$w(1, 9), matrix[i] = [];
    for (var j = 0; $_$w(1, 10), j < 10000; j++) {
        $_$w(1, 11), matrix[i][j] = 8;
    }
}
$_$w(1, 12), diagonalDifference(matrix);
$_$wpe(1);