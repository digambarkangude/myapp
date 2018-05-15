import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
	books: any;
	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
		let httpOptions = {
			headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
		};
		this.http.get('/api/book', httpOptions).subscribe(data => {
			this.books = data;
			console.log(this.books);
		}, err => {
			if(err.status === 401) {
				this.router.navigate(['login']);
			}
		});
	}

	logout() {
		localStorage.removeItem('jwtToken');
		this.router.navigate(['login']);
	}

}
