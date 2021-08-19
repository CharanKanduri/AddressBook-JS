var prompt=require("prompt-sync")();
console.log("Welcome to AddressBook JS program\n")
//UC-1 Creating a Address Book with 
class ContactClass
{
 firstName;
 lastName;
 address;
 city;
 state;
 zip;
 phoneNumber;
 eMail;

 
 //defining Constructor
 constructor(firstName,lastName,address,city,state,zip,phoneNumber,eMail)
 { 
     
    //defining the regular expressions for each Address Attributes 
    let firstNameRegex = new RegExp('^[A-Z][a-z]{2,}$');
    let lastNameRegex = new RegExp('^[A-Z][a-z]{2,}$');
    let addressRegex = new RegExp('^[A-za-z]{4,}$');
    let eMailRegex = new RegExp('^[a-zA-Z0-9]+([\.\+\-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]+)?)$');
    let zipRegex =RegExp('^[0-9]{5,}$');
    let phoneNumberRegex= RegExp('^[0-9]{9,}$')

    //performing validation using regex test method
    if(firstNameRegex.test(firstName))
    {   
        this.firstName=firstName;
        
    }
    else
    {
        throw 'Enter correct first name';
    }

    if(addressRegex.test(address))
    {   
        this.address=address;
        this.city=city;
        this.state=state;
        
    }
    else
    {
        throw 'Enter correct Address';
    }

    if(lastNameRegex.test(lastName))
    {   
        this.lastName=lastName;
        
    }
    else
    {
        throw 'Enter correct Last name';
    }

    
    if(eMailRegex.test(eMail))
    {   
        this.eMail=eMail;
        
    }
    else
    {
        throw 'Enter correct eMail';
    }
    
    if(zipRegex.test(zip))
    {   
        this.zip=zip;
        
    }
    else
    {
        throw 'Enter correct zip';
    }

    if(phoneNumberRegex.test(phoneNumber))
    {   
        this.phoneNumber=phoneNumber;
        
    }
    else
    {
        throw 'Enter correct phone number';
    }

 }

 toString()
 {
  return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zip+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.eMail);    
 }

}
//creating an array to store the address book info
try
{
    var contactList= new Array();
    var ContactClassObject;
    var totalContacts = prompt("\nEnter total number of contacts to be added :\n")
    while(totalContacts--)
    {
    
    let firstName= prompt("Enter First Name:  ");
    let lastName=prompt("Enter Last Name:  ");
    let address=prompt("Enter Address:  ");
    let city=prompt("Enter City:  ");
    let state=prompt("Enter State:  ");
    let zip=prompt("Enter Zip:  ");
    let phoneNumber=prompt("Enter Phone Number:  ");
    let eMail=prompt("Enter Email:  ");
//Filter creates a new array of elements that passes the below condition

    let duplicateCheck = contactList.filter( x => x.firstName == firstName);
//checking array length if length is 0 that means no duplicates
        if(duplicateCheck.length==0)
        {
            contactClassObject=new ContactClass(firstName,lastName,address,city,state,zip,phoneNumber,eMail);
            contactList.push(contactClassObject);
            console.log(contactList);
        }
        else
        {
            console.log("\nDuplicates present");
        }
    }
}
catch(e)
{
    console.error(e);
}


let isModify= parseInt(prompt("\nDo you want to modify ?\n1.Yes\n2.No\n"));
switch(isModify)
{
    case 1:
        Modify();
        break;
    case 2:
        //printing contact list
        console.log(contactList);
        break;
    default:
        console.log("Invalid option\n")
}

//After modification
console.log(contactList);


function Modify()
{   let i=0;
    console.log("\n----TO MODIFY THE CONTACT ENTER FIRST NAME----\n");
    let name = prompt("\nEnter name :\n");
    while( contactList[i].firstName!= name)
    {
        i++;
    } 
    let fieldOption = parseInt(prompt("\nEnter field to be modified 1.firstName 2.lastName 3.Address 4.city 5.state 6.zip 7.phoneNumber 8.email 9.Delete\n"));

    switch(fieldOption)
    {
        case 1:
            console.log("\nEnter New First name :\n");
            let newName = prompt();
            contactList[i].firstName= newName;
            break;
        case 2:
            console.log("\nEnter New Last name :\n");
            let newLastName = prompt();
            contactList[i].lastName= newLastName;
            break;
        case 3:
            console.log("\nEnter New Address :\n");
            let newAddress = prompt();
            contactList[i].Address= newAddress;
            break;
        case 4:
            console.log("\nEnter New city :\n");
            let newCity = prompt();
            contactList[i].city= newCity;
            break;
        case 5:
            console.log("\nEnter New State :\n");
            let newState = prompt();
            contactList[i].state= newState;
            break;
        case 6:
            console.log("\nEnter New Zip :\n");
            let newZip = prompt();
            contactList[i].zip= newZip;
            break;
        case 7:
            console.log("\nEnter New phone number :\n");
            let newPhoneNumber= prompt();
            contactList[i].phoneNumber= newPhoneNumber;
            break;
        case 8:
            console.log("\nEnter New Email :\n");
            let newEMail= prompt();
            contactList[i].eMail=newEMail ;
            break;
            //to delete from array
        case 9:
            delete contactList[i];
            //After modification
            console.log(contactList);
            break;
        default:
            prompt("Invalid option");
            break;
    }

}
//defining a function to count using arrow 
var countOFContacts =(count) =>{
    return count+1; 
}
//using reduce to get the count
let total = contactList.reduce(countOFContacts,0);
console.log("\nTotal Count of contacts are :",total);
console.log(contactList);

//function call for seachbased on city or state
SearchBasedonCityortate();
//function for sear based on city or state
function SearchBasedonCityortate()
{
    console.log("Enter 'CITY' to Search by City\nEnter 'STATE' to Search by State");
    let city= prompt();
    let cityOrStateList = contactList.filter( x => (x.city== city || x.state==city));
    console.log(cityOrStateList);
}
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
    
        for(let value of cities)
        {
         console.log(value.toString());
        }
    }
}
else
{
    console.log("--------------- Printing Contacts Based on State ---------------");
    for(let [key,states] of stateList)
    {
        console.log("State: "+key+"\n")
    
        for(let value of states)
        {
         console.log(value.toString());
        }
    }
}
console.log("Enter 1- to count person based on City\nEnter 2- to count person based on State");
if(prompt()== '1')
{
    console.log("--------------- Printing Contacts count Based on City ---------------");
    for(let [key,cities] of cityList)
    {
        console.log("City: "+key);
        console.log("Count is: "+cities.reduce(countOFContacts,0)+"\n");
    }
}
else
{
    console.log("--------------- Printing Contacts count Based on State ---------------");
    for(let [key,states] of stateList)
    {
        console.log("State: "+key+"\n");
        console.log("Count is: "+states.reduce(countOFContacts,0)+"\n");
    }
}