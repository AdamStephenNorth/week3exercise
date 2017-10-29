// Design pattern will involve delegation of user activities to peer objects which represent various login states: Guest, Member, Admin.
// Login state objects(LSOs) will satisfy a common API providing functionality such as the ability to modify profile and other account information.
// LSOs will be isolated from all other protoype chains by being permanently [[Prototype]]-linked to null.

var Guest = Object.defineProperties( Object.create( null ), {
  
} );
