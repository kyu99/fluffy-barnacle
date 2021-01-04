function diamond(height) {
    for (var i = 0; i < height; i++) {
        var line = ''
        for (var j = i; j < height - 1; j++) {
            line += ' '
        } line += '$'

        if (i !== 0) {
            for (var j = 0; j < 2 * i - 1; j++) {
                line += ' '
            } line += '$'
        }
        console.log(line)
    }

    for (var i = 1; i < height; i++) {
        var line = ''
        for (var j = 0; j < i; j++) {
            line += ' '
        } line += '$'

        if (i !== height - 1) {
            for (var j = 0; j < 2 * (height - 1 - i) - 1; j++) {
                line += ' '
            } line += '$'
        }
        console.log(line)
    }

    console.log('')
}

diamond(3)

diamond(4)

diamond(6)

diamond(10)