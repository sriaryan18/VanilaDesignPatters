class OrderManager{
    constructor() {
        this.orders=[];
    }
    execute(command,...args){

        return command.execute(this.orders,...args);
    }
}

class Command{
    constructor(execute) {
        this.execute = execute;
    }
}

function PlaceOrder(order,id){
    return new Command((orders)=>{
        orders.push(id);
        return `Order placed ${order} and ${id}`;
    })
}

function TrackOrder(id){
    return new Command(orders=>{
        const idx = orders.indexOf(id);
        if(idx>=0){
            return `SUCCESS`;
        }else{
            return 'NOT FOUND';
        }
    })
}

function CancelOrder(id){
    return new Command(orders=>{
        orders = orders.filter(order=>order.id !== id);
    })
}

const orderManager = new OrderManager();

console.log(orderManager.execute(new PlaceOrder("ABCD","1")));
