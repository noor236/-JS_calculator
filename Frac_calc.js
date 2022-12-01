
class Frac_calc{
    //If all fields are numbers
//let An=0;
//let Ad=0;
    Frac_calc()
    {this.n1=n1;
        this.d1=d1;
        this.n2=n2;
        this.d2=d2;
        this.Op=Op;

      }
    arth(n1,d1,n2,d2,Op)
    {
      let An=0;
      let Ad=0;
        //Which Operation
        switch (Op){
            case '+':
                //add fractions using formula ((n1*d2)+(n2*d1)) over (d1*d2)
                An=(n1*d2)+(n2*d1) //Answer Numerator
                 Ad=(d1*d2) //Answer Denominator
                 console.log("The Numerator is " + An);
                  console.log("The Denominator is"  + Ad);
                  console.log("The Answer od additon is"  + An / Ad);

                break;

            case '-':
                //subtract fractions using formula ((n1*d2)-(n2*d1)) over (d1*d2)
                An=(n1*d2)-(n2*d1)//Answer Numerator
                 Ad=(d1*d2)//Answer Denominator


                 console.log("The Numerator is " + An);
                  console.log("The Denominator is"  + Ad);
                  console.log("The Answer od sub is"  + An / Ad);
              //  display();

                break;

            case '*':
                //multiply fractions using formula (n1*n2) over (d1*d2)
                An=n1*n2;//Answer Numerator
                Ad=d1*d2; //Answer Denominator

           console.log("The Numerator is " + An);
            console.log("The Denominator is"  + Ad);
            console.log("The Answer of multiply is"  + An / Ad);

                //display();

                           break;

            case '/':
                //divide fractions using formula (n1*d2) over (d1*n2)
                 An=n1*d2;//Answer Numerator
                  Ad=d1*n2;//Answer Denominator
              console.log("The Numerator is " + An);
               console.log("The Denominator is"  + Ad);
               console.log("The Answer of divid is  "  + An / Ad);

            //  display();

                break;


            case "^2":
                //divide fractions using formula (n1*d2) over (d1*n2)
                 An=(n1/d1)^2;//Answer Numerator
                 Ad=(n2/d2)^2;//Answer Denominator
                 console.log("The Numerator is " + An);
                  console.log("The Denominator is"  + Ad);
                  console.log("The Answer of power 2 is"  + An / Ad);

              //  display();

                break;

            case "^3":
                 An=(n1/d1)^3;//Answer Numerator
                 Ad=(n2/d2)^3;//Answer Denominator
                 console.log("The Numerator is " + An);
                  console.log("The Denominator is"  + Ad);
                  console.log("The Answer of power 3 is"  + An / Ad);


                //display();
                break;
        }

      }

       display(){
       console.log("The number is " + An);
        console.log("The number is"  + Ad);
  }
  }



  //  console.log("The number is " );
   let mysolve= new Frac_calc();

  //let mysolve1= new Solve((1,2,3,4,'*');
   let result = "the Answer is "+ mysolve.arth(10,10,10,10,'*') +"k";
   let result1 = "the Answer is "+ mysolve.arth(10,10,10,10,'/') +"k";
   let result2 = "the Answer is "+ mysolve.arth(10,10,10,10,'+') +"k";
   let result3 = "the Answer is "+ mysolve.arth(10,10,10,10,'-') +"k";
   let result4 = "the Answer is "+ mysolve.arth(10,10,10,10,"^2") +"k";
   let result5 = "the Answer is "+ mysolve.arth(10,10,10,10,"^3") +"k";
   let result6 = "the Answer is "+ mysolve.arth(10,10,10,10,"^3") +"k";
