var prompt=require("prompt-sync")();

//Class to Create contacts
class ContactClass
{
   firstName;
   lastName;
   address;
   city;
   state;
   zip;
   phoneNumber;
   email;

   //Usecase 2: Add Regex Expresions
   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
   {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    let emailRegex=RegExp('^[a-zA-Z0-9]+([\.\+\-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]+)?)$');
    let addressRegex=RegExp('^[A-za-z]{4,}');
    let phoneRegex=RegExp('^[0-9]+\\s[0-9]{10}$');
    let zipRegex=RegExp('^[1-9][0-9]{2}\\s?[0-9]{3}$');
    if(nameRegex.test(firstName) && nameRegex.test(lastName))
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    else throw 'Name is Incorrect';
    if(emailRegex.test(email))
    {
        this.email=email;
    }
    else throw 'Email is Incorrect';
    if(addressRegex.test(address) && addressRegex.test(city) && addressRegex.test(state))
    {
        this.address=address;
        this.city=city;
        this.state=state;
    }
    else throw 'Address is Incorrect';
    if(phoneRegex.test(phoneNumber)) 
    {
        this.phoneNumber=phoneNumber;
    }   
    else throw 'Phoen Number is Incorrect';  
    if(zipRegex.test(zip))
    {
        this.zip=zip;
    } 
    else throw 'Zip is Incorrect';

   }
   toString()
   {
    return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zip+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.email);
        
   }
}

//Usecae 3: Store Address Book Contact in Array 
var contactList=new Array();
CreateContact();
UsecaseOperations();
   //Search a person through city or state or View all city and state List
   function UsecaseOperations()
   {
       console.log("Enter 1-to Insert data to AddresBook");
       console.log("Enter 2-to Display Contact List");
       console.log("Enter 3-to Modify Contact List");
       console.log("Enter 4-to Count Contacts in Contact List");
       console.log("Enter 5-to Search based on City or State");
       console.log("Enter 6-to view based on City or State");
       console.log("Enter 7-Sort Array");

       let option = parseInt(prompt());
       switch (option)
       {
           case 1:
               CreateContact();
               break;
           case 2:
               Display(contactList);
               break;
           case 3:
               Modify();
               break;
           case 4:
               CountContacts();
               break;
           case 5:
               SearchBasedonCityortate();
               break;
           case 6:
               ViewBasedonCityorState();
               break;
           case 7:
               SortMethod();
               break;
           default:
               Console.WriteLine("Invalid Option!");
               break;
       }
   }


//Usecase 1: Create contacts and display 
function CreateContact()
{
    try
    {
        let number= parseInt(prompt("Enter number of contacts to be created:  "));
        var contactClassObject;
        while(number--)
        {
            let firstName= prompt("Enter First Name:  ");
            let lastName=prompt("Enter Last Name:  ");
            let address=prompt("Enter Address:  ");
            let city=prompt("Enter City:  ");
            let state=prompt("Enter State:  ");
            let zip=prompt("Enter Zip:  ");
            let phoneNumber=prompt("Enter Phone Number:  ");
            let email=prompt("Enter Email:  ");

            //Usecase 7: Ability to ensure there is no Duplicate Entry of the same Person in the Address Book

            let duplicateCheck = contactList.filter( x => x.firstName == firstName);
            if(duplicateCheck.length==0)
            {
                contactClassObject=new ContactClass(firstName,lastName,address,city,state,zip,phoneNumber,email);
                contactList.push(contactClassObject);
                //Display Array Objects
                console.log(contactList);
            }
        }
    }
    catch(e)
    {
        console.error(e);
    }
}

function Display(list)
{
    for( let value of list)
    {
        console.log(value.toString());
    }
}

//Usecase 11: Ability to sort the entries in the address book alphabetically by Person???s name
function SortMethod()
{
    //Usecase 12: Ability to sort the entries in the address book by City, State, or Zip 
    console.log("Enter 1-Sort Array based on First Name");
    console.log("Enter 2-Sort Array based on City");
    console.log("Enter 3-Sort Array based on State");
    console.log("Enter 4-Sort Array based on Zip");
    let option = parseInt(prompt());
    switch (option)
    {
        case 1:
            contactList.sort((x,y) => 
            {
                if(x.firstName>y.firstName) return 1;
                else return -1;
            });
            break;
        case 2:
            contactList.sort((x,y) => 
            {
                if(x.city>y.city) return 1;
                else return -1;
            });
            break;
        case 3:
            contactList.sort((x,y) => 
            {
                if(x.state>y.state) return 1;
                else return -1;
            });
            break;
        case 4:
            contactList.sort((x,y) => 
            {
                if(x.zip>y.zip) return 1;
                else return -1;
            });
            break;
    }
    //Display Array Objects
    console.log("--------------After Sorting --------------\n");
    Display(contactList);
}


//Uecase 4: Modify a contact baed on Name
function Modify() 
{
    try
    {
        //User enters field to Modify
        let i=0;
        console.log("-------To Modify-------\nEnter first name of user that needs modification");
        let name = prompt();

        //Traverse till the desired index
        while( contactList[i].firstName!= name && i< contactList.length)
        {
            i++;
            if(i== contactList.length)
            {
                throw 'Name does not exist in ContactLit! Please Enter a valid name';
            }
    
        }
        console.log("Enter field to be modified 1.firstName 2.lastName 3.Address 4.city 5.state 6.zip 7.phoneNumber 8.email 9.Delete a contact");
        let ch =  parseInt (prompt());
        switch (ch)
        {
            case 1:
                console.log("Enter the modified value");
                let fn =  prompt();
                contactList[i].firstName = fn;
                break;
            case 2:
                console.log("Enter the modified value");
                let ls = prompt();
                contactList[i].lastName = ls;
                break;
            case 3:
                console.log("Ente the modified value");
                let add = prompt();
                contactList[i].address = add;
                break;
            case 4:
                console.log("Enter the modified value");
                let cities =  prompt();
                contactList[i].city = cities;
                break;
            case 5:
                console.log("Enter the modified value");
                let states = prompt();
                contactList[i].state=states;
                break;
            case 6:
                console.log("Enter the modified value");
                let temp = prompt();
                contactList[i].zip = temp;
                break;
            case 7:
                console.log("Ente the modified value");
                let phn =  prompt();
                contactList[i].phoneNumber = phn;
                break;
            case 8:
                console.log("Ente the modified value");
                let emails = prompt();
                contactList[i].email = emails;
                break;

            //Usecae 5: Delete a user based on Name
            case 9:
                delete contactList[i];
                break;        
            default:
                console.log("Invalid Option");
                break;
        }
    }
    catch(e)
    {
        console.error(e);
    }
}


function Findcount(count)
{
    return count+1;
}
//Usecase 6: Ability to find number of contacts in the address book
function CountContacts()
{
    let totalCount=contactList.reduce(Findcount,0);
    console.log("Total number of contacts in AddressBook: "+totalCount);
}


//Usecase 8: Ability to search Person in a particular City or State 
function SearchBasedonCityortate()
{
    console.log("Enter 'CITY' to Search by City\nEnter 'STATE' to Search by State");
    let city= prompt();
    let cityOrStateList = contactList.filter( x => (x.city== city || x.state==city));
    console.log(cityOrStateList);
}

//Usecase 9: Ability to view Persons by City or State
function ViewBasedonCityorState()
{

    var stateList=new Map();
    var cityList=new Map();
    contactList.forEach(element => {

        //-------------------- Store States in Dictionary -----------------
        stateValue=new Array();
        //Check whether dict has state
        if(stateList.has(element.state))
        {
            stateValue=stateList.get(element.state);
        }
        stateValue.push(element);
        //Set vale to dictionary
        stateList.set(element.state,stateValue);

        //-------------------- Store Cities in Dictionary -----------------
        cityValue=new Array();
        //Check whether dict has state
        if(cityList.has(element.city))
        {
            cityValue=cityList.get(element.city);
        }
        cityValue.push(element);
        //Set vale to dictionary
        cityList.set(element.city,cityValue);
        
    });

    console.log("Enter 1- to view person based on City\nEnter 2- to view person based on State");
    if(prompt()== '1')
    {
        console.log("--------------- Printing Contacts Based on City ---------------");
        for(let [key,cities] of cityList)
        {
            console.log("City: "+key+"\n");
            Display(cities);
        }
    }
    else
    {
        console.log("--------------- Printing Contacts Based on State ---------------");
        for(let [key,states] of stateList)
        {
            console.log("State: "+key+"\n");
            Display(states);
        }
    }

    // Uecase 10: Count based on City or State
    console.log("Enter 1- to count person based on City\nEnter 2- to count person based on State");
    if(prompt()== '1')
    {
        console.log("--------------- Printing Contacts count Based on City ---------------");
        for(let [key,cities] of cityList)
        {
            console.log("City: "+key);
            console.log("Count is: "+cities.reduce(Findcount,0)+"\n");
        }
    }
    else
    {
        console.log("--------------- Printing Contacts count Based on State ---------------");
        for(let [key,states] of stateList)
        {
            console.log("State: "+key+"\n");
            console.log("Count is: "+states.reduce(Findcount,0)+"\n");
        }
    }
}

