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
     this.firstName=firstName;
     this.lastName=lastName;
     this.address=address;
     this.city=city;
     this.state=state;
     this.zip=zip;
     this.phoneNumber=phoneNumber;
     this.eMail=eMail;
 }
 toString()
 {
  return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zip+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.eMail);
      
 }
}
//creating an array to store the address book info
var contactList= new Array();
let ContactClassObject = new ContactClass("Charan","Kanduri","Saraswathi Nagar","Nellore","AP","524002","939393939","Charan@gmail.com");
contactList.push(ContactClassObject);
let ContactClassObject1 = new ContactClass("Srikar","Kanduri","4th Avenue","Boston","Massachusetts","524002","009000900","Srikar@gmail.com");
contactList.push(ContactClassObject1);

//printing the address book
contactList.forEach(contact =>{
    console.log(contact.toString());
});

