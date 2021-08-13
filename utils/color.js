const colors = {
    0: 'gray',
    1: 'red',
    2: 'orange',
    3: 'yellow',
    4: 'green',
    5: 'teal',
    6: 'blue',
    7: 'indigo',
    8: 'purple',
    9: 'pink'
}

export const getColor = (tag) => {
    const color = colors[tag]
    return color
}