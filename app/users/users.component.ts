import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
 import {BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {UserService} from './user.service';
import { MODAL_DIRECTVES } from 'ng2-bootstrap/components/modal';
@Component({
    templateUrl: 'app/users/users.component.html',
    providers: [UserService,BS_VIEW_PROVIDERS],
    directives: [RouterLink,MODAL_DIRECTVES]
})
export class UsersComponent implements OnInit {
    users: any[];
    
    constructor(private _service: UserService){
	}

	ngOnInit(){
		this._service.getUsers()
			.subscribe(users => this.users = users);
	} 
    
    deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._service.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}
}