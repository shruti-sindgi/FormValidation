import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { EqualValidator } from '../equal-validator';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  validPattern = "^[A-Za-z]+$"
  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      'firstname': new FormControl('', [Validators.required,Validators.pattern(this.validPattern)] ),
      'lastname':new FormControl('', [Validators.required,Validators.pattern(this.validPattern)] ),
      'email': new FormControl('', [Validators.required, Validators.email] ),
      'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
      'mob':new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      'cal':new FormControl(''),
      'address':new FormControl(''),
      'city':new FormControl(''),
      'state':new FormControl(''),
      'conpwd':new FormControl('',[Validators.required]),
    });
    this.myForm.setValidators(EqualValidator('password', 'conpwd'));
  }

  ngOnInit() {
    
    
  }
  get f() { return this.myForm.controls; }
  
  onSubmit() {
    if (this.myForm.invalid) {
      return;
  }
    alert("successful")
  
}


}
