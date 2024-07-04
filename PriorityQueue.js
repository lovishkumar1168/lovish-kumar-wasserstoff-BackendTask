export class PriorityQueue{
    constructor()
    {
        this.queue=[]
    }

    enqueue(request,priority)
    {
        this.queue.push({...request,priority});
        this.queue.sort((a,b)=>a.priority-b.priority);
    }

    dequeue()
    {
        return this.queue.shift();
    }

    length()
    {
        return this.queue.length;
    }
}