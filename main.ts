interface Student {
    name: string;
    avgMark: number;
}

interface Statistics {
    avgMark: number;
    hightestMark: string;
    lowestMark: string;
}

function getStatistics(marks: Student[]): Statistics {
    var mn = 10
    var mx = -10
    var hMark = ''
    var lMark = ''
    var avg = 0
    for (var i = 0; i < marks.length; i++) {
         if (marks[i]['avgMark'] > mx) {
            hMark = marks[i]['name']
            mx = marks[i]['avgMark']
         } 
         if (marks[i]['avgMark'] < mn) {
             lMark = marks[i]['name']
             mn = marks[i]['avgMark']
         }
         avg += marks[i]['avgMark']
    }
    avg /= marks.length;
    return {avgMark: avg,
            hightestMark: hMark,
            lowestMark: lMark}}

const testMarks = [{
    name: 'Vasya',
    avgMark: 3.75
}, {
    name: 'Lena',
    avgMark: 4.89
}]

console.log(getStatistics(testMarks))
