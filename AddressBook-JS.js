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
    ContactClassObject = new ContactClass(firstName,lastName,address,city,state,zip,phoneNumber,eMail);
    contactList.push(ContactClassObject);
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
