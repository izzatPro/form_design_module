const blog = ['wordpress','livejornel','bbs'],
     social = ['youtube','pornhub','nestdaily'],
     internet =[...blog,...social,'dede','pepe'];
     console.log(internet);


     function namee(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
     }
     console.log(namee(...[3,4,5]));


     let b = {
        a: 44,
        b:'asdsad'
     }
     let c = {...b};
     console.log(c);