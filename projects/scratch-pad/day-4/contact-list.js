// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.// research splice method
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return object
    return {
        id: id, //id key = id value
        nameFirst: nameFirst,//nameFirst key = namefirst value
        nameLast: nameLast//nameLast key = nameLast value
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },

        //addContact api
        addContact: function(contact){
            contacts.push(contact);//takes contact value and adds to contact list
        },

        //findContact api
        findContact: function(fullName){
            //iterate contacts
            for(var i = 0; i < contacts.length; i++){
                //if fullname === nameFirst nameLast
                if(fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast){
                    return contacts[i];//return contact at index
                } else{
                    return undefined;//else undefined
                }
            }
        },

        //removeContact api
        removeContact: function(contact){
            //iterate
            for(var i = 0; i < contacts.length; i++){
                //if contact is at index
                if(contacts[i] === contact){
                    contacts.splice(contacts[i], 1);//remove contact
                }
            }
        },

        //printAllContactNames api
        printAllContactNames: function(){
            //create storage arr
            var contactNames = [];
            //create storage str
            var joinedContacts;
            //iterate
            for(var i = 0; i < contacts.length; i++){
                contactNames.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast);//add contacts to storage arr
                 joinedContacts = contactNames.join('\n');//join storage arr with line breaks
            }
            return joinedContacts;//return storage string
        }

    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
