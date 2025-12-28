import { MyDatabaseClassic } from "./my-database-classic.js";


const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({name: 'Ibra', age: 32});
myDatabaseClassic.add({name: 'Luiz', age: 30});
myDatabaseClassic.add({name: 'Eduardo', age: 25});
myDatabaseClassic.show();
myDatabaseClassic.remove(2);
myDatabaseClassic.show()