function augmentingPath(graph, start, end) {
    var path = []
    var visited = []
    for(keys in graph){
        visited[keys] = false
    }

    if(start == end)
        return [start];
    if(Object.keys(graph).length < 1 || Object.keys(graph[start]).length < 1)
        return path;
    var stack = [start]
    
    while(stack.length > 0 && start != end){
        start = stack[stack.length-1]
        stack.pop()
        //console.log(stack)

        if(!visited[start]){
            path.push(start)
            visited[start] = true

            for(var i in graph[start]){
                //console.log(graph[start])
                //console.log("stack check",!visited[graph[start]])

                if(!visited[graph[start]]){
                    stack.push(i)
                }
            }
            //console.log(stack)
        }
        
    }
    

    return path
}
// used similar code to my search in graphs algorithm
//console.log(augmentingPath({'foo': {'boo': 7}, 'boo': {'foo': 3, 'bar': 2}, 'bar': {'boo': 4}}, 'foo', 'bar')) //debugging