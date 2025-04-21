//리스트 자르기

function solution(n, slicer, num_list) {
    var answer = [];
    var result = []
    switch(n){
        case 1 : answer=num_list.slice(0, slicer[1]+1)
        break;
        case 2 : answer=num_list.slice(slicer[0], num_list.length)
        break;
        case 3 : answer=num_list.slice(slicer[0], slicer[1]+1)
        break;
        case 4 : 
            result=num_list.slice(slicer[0], slicer[1]+1)
            for(i=0; i<result.length; i+=slicer[2]){
                answer.push(result[i])
            }
            
        break;
    }

    return answer;
}
