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

//printing the address book

console.log(contactList);

